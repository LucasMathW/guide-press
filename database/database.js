import Sequelize from 'sequelize'

//alternative -u lucasmt -p 1234
const connection = new Sequelize('guidepress', 'matheus', 'meusegredao3', {
  host: 'localhost',
  dialect: "mysql",
})

export default connection