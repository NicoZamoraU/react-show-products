const confVars = {
  development: {
    mysql_host: 'localhost',
    mysql_user: 'root',
    mysql_password: 'root',
  },
}

export default confVars[process.env.NODE_ENV || 'development']
