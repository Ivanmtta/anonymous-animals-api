const express = require('express');
const cors = require('cors');
require('dotenv/config');

const app = express();

const routes = require('./routes/routes');

app.use(cors());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log('server running');
});