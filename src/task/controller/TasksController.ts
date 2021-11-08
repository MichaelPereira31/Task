import { Request, Response } from "express";
import { CreateTaskService } from "../services/CreateTaskService";
import  ListTaskService  from "../services/ListTaskService";

export class TasksController{
    public async index(request:Request, response:Response):Promise<Response>{
        const listTask = new ListTaskService()

        const tasks = await listTask.execute()

        return response.json(tasks)
    }

    public async create(request:Request,response:Response):Promise<Response>{
        const{name,description,task_day} = request.body;
        const createTask = new CreateTaskService()
        const task = createTask.execute({
            name,
            description,
            task_day
        })
        return response.json(task)
    }
}