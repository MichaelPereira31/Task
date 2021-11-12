import { getCustomRepository } from "typeorm";
import Task from "../entity/Task";
import { TaskRepository } from "../repositories/TaskRepository";

interface IRquest{
    id: string
}

class ShowTaskService{
    public async execute({id}:IRquest):Promise<Task>{
        const taskRepository = getCustomRepository(TaskRepository)

        const task = await taskRepository.findById(id)

        if(!task){
            throw new Error("Task not found")
        }

        return task
        
    }

}

export {ShowTaskService}