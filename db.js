const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/employees';
mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected',()=>{
  console.log('Connected to MongoDB server');
});
db.on('error' , (err)=>{
  console.log('MongoDB connected error');
});
db.on('disconnected' , ()=>{
  console.log('MongoDB server disconnected');
});
module.exports = db;