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