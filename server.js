const express = require('express');
const router = require('./src/routes/index');
const connectDb = require('./config/db');

const app = express();
var cors = require('cors');

const port = 5000;

app.use(express.json());
app.use(cors());

connectDb();

app.use('/api/v1', router);

app.listen(port, () => {
   console.log(`Your server is running on ${port}`);
});
