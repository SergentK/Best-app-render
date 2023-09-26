const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'cloud_82z9', // Database name
  'clouduser', // User
  'RvdlQUEVL5I27OdYqRU4puyHV3Q3ajtR', // MDP
  {
    host: 'dpg-ck9d0f9ehpqs73c3hfp0-a', // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
