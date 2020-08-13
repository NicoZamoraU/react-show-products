import Search from './Search'
import Stadistics from './Stadistics'

export default app => {
  app.use('/api/search', Search)
  app.use('/api/stadistics', Stadistics)
}
