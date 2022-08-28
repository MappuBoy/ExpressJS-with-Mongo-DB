const express=require('express')
const login=require('./routes/login')
const account=require('./routes/account')
const app=express()
const port=5000
const mongoose=require('mongoose')

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://facebook-clone:QKaG5gAR1lxVgyc4@cluster0.atvja0v.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.use(express.json())

mongoose.connect(uri,{useNewUrlParser:true})
const con=mongoose.connection

con.on("open",()=>{
    console.log("Mongodb Connected");

})

app.use('/account',account)
app.use('/login',login)

app.listen(port,()=>{
    console.log(`example at listing port ${port}`)
})