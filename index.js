
// !using mongoose 
const express=require('express')
const mongoose=require('mongoose');
const cors=require('cors')
const app=express()
app.use(cors({
    origin:'*'
}))
    // !Define  schema fields here
    // For example: name: String, age: Number, etc.
// const dataSchema = new mongoose.Schema({
//    name:String,
//    email:String,
//    password:String
// });
// const Data=mongoose.model('userData',dataSchema)
async function getData(){
    const result= await mongoose.connect('mongodb://127.0.0.1:27017/mongo_db',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    //! Inserting data to collection filds
    // await Data.create({
    //     name:"madan",
    //     email:"madan@2057",
    //     password:"madan123579"
    // })
    const db=result.connection.db;
    const collection=db.collection('userdatas')
    const responce= await collection.find({}).toArray()
    console.log(responce);
}
getData()
//! using mongodb 
/*const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(url);
const database = 'mongo_db';

async function getData() {
  try {
    const result = await client.connect();
    const db = result.db(database);
    const collection = db.collection('data');
    const response = await collection.find({}).toArray();
    console.log(response);
  } catch (error) {
    console.error('Error:', error);
  }
}
getData();*/
