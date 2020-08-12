import Search from './Search'

export default app => {
  app.use('/api/search', Search)
}
