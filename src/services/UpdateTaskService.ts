import { getCustomRepository } from "typeorm";
import Task from "../entity/Task";
import { TaskRepository } from "../repositories/TaskRepository";

interface IRquest{
    id:string;
    name: string;
    description: string;
    task_day:Date;
    status: boolean;
}

class UpdateTaskService{
    public async execute({id,name, description,task_day, status}:IRquest): Promise<Task | undefined>{
        const taskRepository = getCustomRepository(TaskRepository)
        const task = await taskRepository.findOne(id)

        if(!task){
            throw new Error("Task not found")
        }
        task.name = name;
        task.description = description;
        task.task_day = task_day
        task.status = status;

        await taskRepository.save(task)

        return task;

    }
}

export default UpdateTaskService