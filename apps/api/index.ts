import axios from 'axios';
import express, { response } from 'express';

const app = express();
import {prisma} from "store/client"



app.get("status/websiteId",(req,res) =>{
  
})
app.post("website",async (req,res) =>{
  const result = await prisma.website.create({
      data :{

          url : req.body.url,
          timeAdded : new Date()
      }

   })
  response.json({
      id  :  result.id
  })
})


app.listen(5000,() =>{
    console.log(`Server is running on port ${5000}`)
})