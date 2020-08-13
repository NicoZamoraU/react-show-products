import express from 'express'
import cors from 'cors'
import morgan from 'morgan-body'
import bodyParser from 'body-parser'

import Routes from './routes'
import config from './config'

const app = express()
const port = config.port || 3002

app.listen(
  port,
  () => console.log(`Server listening on port: ${port}, pid: ${process.pid}`),
)

if (process.env.NODE_ENV !== 'production') {
  morgan(app, {
    logAllReqHeader: true,
  })
}

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '300mb' }))
Routes(app)

export default app
