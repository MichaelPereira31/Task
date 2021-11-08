import { Request, Response } from "express";
import "reflect-metadata";
import {createConnection} from "typeorm";
import routes from "./router";
const express = require('express')

const app = express()
createConnection() 

app.use(express.json())
app.use(routes)

app.get('/',(request:Request,response:Response)=>{
    return response.json({message:'hello dev'})
})



app.listen(8000,()=>{
    console.log('Server run')
})