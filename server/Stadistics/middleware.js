import _ from 'lodash'

import config from '../config'

export const getStadistics = ({ conn }) => async (req, res, next) => {
  try {
    const sqlQuery = `SELECT * FROM ${config.data_base_name}.${config.table_name}`
    await conn.query(sqlQuery, (err, resolve) => {
      if (err) return res.status(200).send([])

      const tags = _.reduce(resolve, (acum, value) => {
        const tagsToMap = _.split(value.tags, ',')
        const p = _.uniq(_.flattenDeep(_.compact(_.map(tagsToMap, tag => _.trim(tag)))))

        return acum.concat(p)
      }, [])

      const tagsFlattened = _.uniq(_.flattenDeep(tags))

      const data = _.map(tagsFlattened, tag => {
        const productsGrouped = _.compact(_.map(resolve, product => {
          if (product.tags.includes(tag)) {
            return product
          }

          return null
        }))

        return {
          tag,
          products: productsGrouped,
          total: productsGrouped.length,
        }
      })

      const dataOrdered = _.orderBy(data, 'total', 'desc')

      return res.status(200).send(dataOrdered)
    })
  } catch (error) {
    return res.sendStatus(500)
  }
}
