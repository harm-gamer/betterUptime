import axios from 'axios';
import express from 'express';

const app = express();


app.get("website",async (req,res) =>{
let response = axios.get("https://google.com");
console.log(response);
})

app.get("status/websiteId",(req,res) =>{
  
})

app.listen(5000,() =>{
    console.log(`Server is running on port ${5000}`)
})