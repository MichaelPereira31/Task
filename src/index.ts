import "reflect-metadata";
import {createConnection} from "typeorm";
import express from "express";
import swaggerUi = require("swagger-ui-express");
import routes from "./routes";
import swaggerFile from "./swagger.json"

createConnection()

    // create express app
    const app = express();
    app.use(express.json());
    app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(swaggerFile))
    app.use(routes)
    app.get('/',(request, response) => {
        return response.send('ok')
    })


    // setup express app here
    // ...

    // start express server
    app.listen(8000,()=>{
        console.log("server started")
    });



