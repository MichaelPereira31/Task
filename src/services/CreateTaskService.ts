import { getCustomRepository } from "typeorm";
import  Task  from "../entity/Task";
import { TaskRepository } from "../repositories/TaskRepository";

interface IRquest{
    name:string;
    description:string;
    task_day:Date;
}

export class CreateTaskService{
    public async execute({name,description,task_day}:IRquest):Promise<Task>{
        const taskRepository = getCustomRepository(TaskRepository);

        const task = taskRepository.create({
            name,
            description,
            task_day
        });

        await taskRepository.save(task)

        return task
    }
}