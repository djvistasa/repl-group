require('dotenv').config();
const express = require('express');
const application = express();
const cors = require('cors');
const routes = require('./src/routes');

const { PORT } = process.env;

application.use(express.json());
application.use(express.urlencoded());

application.use(cors());
application.use('/', routes);

const port = PORT || 3002;

application.listen(port, () => {
  console.log(`server started on port ${port}`);
});
