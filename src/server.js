const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const dbConnect = require("./db/dbConnect");

dbConnect();
app.use(cors()) 

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Endpoint working')
});

const userRoutes = require("./routes/auth.routes")
app.use(userRoutes );


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})