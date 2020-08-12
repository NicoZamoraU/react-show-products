import mysql from 'mysql'
import csvtojson from 'csvtojson/v2'
import _ from 'lodash'

import config from './config'

const con = mysql.createConnection({
  host: config.mysql_host,
  user: config.mysql_user,
  password: config.mysql_password,
})

con.connect(err => {
  if (err) throw err
  console.log('DB Connected!')
})

const insertData = async () => {
  const data = await csvtojson().fromFile(`${__dirname}/datos_descuentos_buscador_prueba.2.0.csv`)
  const dataReduced = _.reduce(data, (acum, value) => {
    const values = Object.values(value)
    acum.push(values)

    return acum
  }, [])

  const insertSQL = "INSERT INTO shop.productos(titulo,descripcion,fecha_inicio,fecha_termino,precio,imagen,vendidos,tags) VALUES ? "

  con.query(insertSQL, [dataReduced], (err, result) => {
    if (err) throw err
    console.log('Number of records inserted: ', result.affectedRows)
  })
}

con.query('CREATE DATABASE shop', (err, result) => {
  if (err && err.code !== 'ER_DB_CREATE_EXISTS') throw err
  if (err.code === 'ER_DB_CREATE_EXISTS') return
  console.log('DB Created Successfully')
})

const createTable = `CREATE TABLE shop.productos (
  id INT AUTO_INCREMENT,
  titulo LONGTEXT,
  descripcion LONGTEXT,
  fecha_inicio LONGTEXT,
  fecha_termino LONGTEXT,
  precio LONGTEXT,
  imagen LONGTEXT,
  vendidos LONGTEXT,
  tags LONGTEXT,
  PRIMARY KEY (id))`
con.query(createTable, (err, result) => {
  if (err && err.code === 'ER_TABLE_EXISTS_ERROR') return
  if (err) throw err
  console.log('Table Created')
  console.log('Inserting data...')

  insertData()
})

export default con
