import { Request, Response } from "express";
import { CreateTaskService } from "../services/CreateTaskService";
import { DeleteTaskService } from "../services/DeteleTaskService";
import ListTaskService from "../services/ListTaskService";
import { ShowTaskService } from "../services/ShowTaskService";
import UpdateTaskService from "../services/UpdateTaskService";
//import  ListTaskService  from "../services/ListTaskService";

export class TasksController{
    public async index(request:Request, response:Response):Promise<Response>{
        const listTask = new ListTaskService()

        const tasks = await listTask.execute()

        return response.json(tasks)
    }

    public async show(request:Request, response:Response):Promise<Response>{
        const {id} = request.params
        
        const showTask = new ShowTaskService()

        const task = await showTask.execute({id})

        return response.json(task)

    }

    public async create(request:Request,response:Response):Promise<Response>{
        const{name,description,task_day} = request.body;
        const createTask = new CreateTaskService()
        const task = await createTask.execute({
            name,
            description,
            task_day
        })
        return response.json(task)
    }

    public async update(request:Request,response:Response):Promise<Response>{
        const {id} = request.params;
        const{name,description,task_day,status} = request.body;

        const updateTask = new UpdateTaskService()

        const task = await updateTask.execute({
            id,name,description,task_day,status
        })

        return response.json(task)

    }


    public async delete(request:Request,response:Response):Promise<Response>{
        const {id} = request.params;

        const deleteTask = new DeleteTaskService()

        const task = await deleteTask.execute({id})

        return response.json([])
    }
}