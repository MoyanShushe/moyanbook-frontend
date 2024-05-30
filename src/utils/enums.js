const ListState = {
  Inactive: Symbol('inactive'),
  Default: Symbol('default'),
  Loading: Symbol('loading'),
  NoMore: Symbol('no-more'),
  Failed: Symbol('failed')
}

const InfoState = {
  NotLoaded: Symbol('not-loaded'),
  Loading: Symbol('loading'),
  Loaded: Symbol('loaded'),
  Failed: Symbol('failed'),
  Updating: Symbol('updating'),
  NotFound: Symbol('not-found')
}

export { ListState, InfoState }
