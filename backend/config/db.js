/* .ENV Settings */
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
/* End .ENV Settings */
const db = {
  redis: {
    option: {
      /* uncomment port if publish */
      port: 6379,
      /* UNIX SOCKET IF HOSTING USE LINUX 
      * Change Domain To your Directory
      */
      // path: '/home/doman/redis.sock'
    }
  },
  sequelize: {
    dbName: process.env.DB_NAME || 'mern_project_db',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    options: {
      host: process.env.DB_HOST || 'localhost',
      dialect: process.env.DB_VENDOR || 'mysql'
    }
  }
}

module.exports = db;