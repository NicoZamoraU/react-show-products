import express from 'express'
import cors from 'cors'
import morgan from 'morgan-body'
import bodyParser from 'body-parser'
import csvtojson from 'csvtojson/v2'

import Routes from './routes'

const app = express()
const port = process.env.PORT || 3002

app.listen(
  port,
  () => console.log(`Server listening on port: ${port}, pid: ${process.pid}`),
)

if (process.env.NODE_ENV !== 'production') {
  morgan(app, {
    logAllReqHeader: true,
  })
}

csvtojson()
  .fromFile(`${__dirname}/datos_descuentos_buscador_prueba.2.0.csv`)
  .then(json => {
    console.log({ json })
  })
  .catch(err => console.log({ err }))

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
Routes(app)

export default app
