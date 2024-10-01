const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/' , (req , res )=>{
  console.log('welcome to my server');
});
const employeeRoutes = require('./routes/employeesRoutes');
app.use('/employee' , employeeRoutes);
app.listen(4000 , (req , res)=>{
   console.log('server is on port 4000');
});
