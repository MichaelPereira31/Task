import { getCustomRepository } from "typeorm";
import  Task  from "../entity/Task";
import { TaskRepository } from "../repositories/TaskRepository";

export default class ListTaskService{
    public async execute():Promise<Task[]>{
        const taskRepository = getCustomRepository(TaskRepository)

        const tasks = await taskRepository.find();

        return tasks
    }
}