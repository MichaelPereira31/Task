import { Router } from "express";
import taskRouter from "./routes/taskRouter";

const routes =Router()

routes.get('/',(request,response) => {
    return response.json({message:'ok'});
})


routes.use('/task',taskRouter)

export default routes