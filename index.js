import express from 'express';
import hl from 'handy-log';
import morgan from 'morgan';
import connection from './src/database/database.js';
import routes from './src/routes.js';

const PORT = 3333;
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

connection
  .authenticate()
  .then(() => {
    console.log('connection to the database was successfully');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(routes);
app.use(morgan('tiny'));

app.listen(PORT, () => {
  hl.rainbow(`app is running on port: ${PORT}`);
});
