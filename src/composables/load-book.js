import { api } from 'src/boot/axios'
import { ListState, InfoState } from 'src/utils/enums'
import { reactive, ref, unref, watch } from 'vue'

const cache = {}

export function useLoadBook(bookId) {
  const book = ref(null)
  const state = ref(InfoState.NotLoaded)
  function load() {
    const id = bookId.value
    if (state.value === InfoState.Loading) return
    state.value = InfoState.Loading
    if (cache[id]) {
      book.value = cache[id]
      state.value = InfoState.Updating
    } else {
      book.value = null
      state.value = InfoState.Loading
    }
    api.post('/book/fetch', { id }, { baseURL: 'http://8.137.96.68:19202' })
      .then(res => {
        const { rows } = res.data
        if (rows.length === 0) {
          state.value = InfoState.NotFound
        } else {
          book.value = rows[0]
          if (cache[id]) {
            Object.assign(cache[id], rows[0])
          } else {
            cache[id] = rows[0]
          }
          state.value = InfoState.Loaded
        }
      })
      .catch(err => {
        console.error(err)
        state.value = cache[id] ? InfoState.Loaded : InfoState.Failed
      })
  }
  load()
  watch(bookId, load)
  return { book, state, load }
}

export function useLoadBooks(query = ref({})) {
  const books = reactive([])
  const state = ref(unref(query) ? ListState.Loading : ListState.Inactive)
  let page = 0
  function load() {
    if (state.value === ListState.Loading) return
    if (!query.value) return
    state.value = ListState.Loading
    api.post('/book/fetch', {
      pageSize: 20,
      ...query.value
    }, { baseURL: 'http://8.137.96.68:19202' })
      .then(res => {
        const { rows, totalPageCount } = res.data
        page++
        books.push(...rows)
        rows.forEach(x => { cache[x.id] = x })
        if (page >= totalPageCount) {
          state.value = ListState.NoMore
        } else {
          state.value = ListState.Default
        }
      })
      .catch(err => {
        console.error(err)
        state.value = ListState.Failed
      })
  }
  watch(query, () => {
    page = 0
    books.splice(0)
    load()
  })
  load()
  return { books, state, load }
}
