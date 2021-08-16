import Sequelize from 'sequelize';
// alternative -u lucasmt -p 1234
// alternative2 -u matheus -p meusegredao3
const connection = new Sequelize('guidepress', 'root', 'meusegredao', {
  host: 'localhost',
  dialect: 'mysql',
});

export default connection;
