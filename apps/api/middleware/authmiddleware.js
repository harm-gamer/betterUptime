import express from 'express';

const app = express();

app.get('/auth',(req,res,next) =>{

      const {token} = req.header["authorization"];

      if(!token){
        
      }
})

