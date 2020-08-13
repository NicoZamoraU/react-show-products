if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const confVars = {
  development: {
    mysql_host: 'localhost',
    mysql_user: 'root',
    mysql_password: 'root',
    data_base_name: process.env.DATA_BASE_NAME || 'productos',
    table_name: process.env.TABLE_NAME || 'shop',
    port: process.env.PORT || 3002,
  },
}

export default confVars[process.env.NODE_ENV || 'development']
