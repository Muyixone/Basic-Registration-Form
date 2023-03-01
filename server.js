const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.MONGOOSE_URL, connectionParams)
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error(`Err connecting to the database. ${err}`);
  });

const PORT = 3000;

app.listen(PORT, () => {
  console.log('application on');
});
