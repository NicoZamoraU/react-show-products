export const getAllData = ({ conn }) => async (req, res, next) => {
  try {
    const sqlQuery = 'SELECT * FROM shop.productos'
    await conn.query(sqlQuery, (err, resolve) => {
      if (err) return res.sendStatus(500)

      return res.status(200).send(resolve)
    })
  } catch (error) {
    return res.sendStatus(500)
  }
}

export const getSpecific = ({ conn }) => async (req, res, next) => {
  try {
    const { body } = req
    const { keyword } = body

    const sqlQuery = `SELECT * FROM shop.productos WHERE titulo LIKE '%${keyword}%'`

    await conn.query(sqlQuery, (err, resolve) => {
      if (err) return res.status(200).send([])

      return res.status(200).send(resolve)
    })
  } catch (error) {
    return res.sendStatus(500)
  }
}
