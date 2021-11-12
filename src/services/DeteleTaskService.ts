import { getCustomRepository } from "typeorm"

import { TaskRepository } from "../repositories/TaskRepository"

interface IRequest{
    id: string
}
class DeleteTaskService{
    public async execute({id}:IRequest): Promise<void>{
        const taskRepository = getCustomRepository(TaskRepository)

        const task = await taskRepository.findOne(id)
        if(!task){
            throw new Error(`Task ${id} not found`)
        }

        await taskRepository.remove(task)

    }

}

export{DeleteTaskService}