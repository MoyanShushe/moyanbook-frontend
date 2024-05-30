import ErrorNotFound from 'pages/ErrorNotFound.vue'
import MarketPage from 'src/pages/MarketPage.vue'
import MainLayout from 'layouts/MainLayout.vue'
import MyPage from 'src/pages/MyPage.vue'
import OfficialSell from 'src/pages/OfficialSell.vue'
import BookDetail from 'src/pages/BookDetail.vue'
import SearchBooks from 'src/pages/SearchBooks.vue'
import LoginPage from 'src/pages/LoginPage.vue'
import RegisterPage from 'src/pages/RegisterPage.vue'
import SettingsPage from 'src/pages/SettingsPage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: MarketPage
      },
      {
        path: 'my',
        component: MyPage
      },
      {
        path: 'official',
        component: OfficialSell
      }
    ]
  },
  {
    path: '/books/:id',
    component: BookDetail,
    props: true
  },
  {
    path: '/search',
    component: SearchBooks
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/register',
    component: RegisterPage
  },
  {
    path: '/settings',
    component: SettingsPage
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: ErrorNotFound
  }
]

export default routes
