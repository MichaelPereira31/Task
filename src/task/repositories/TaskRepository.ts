import { EntityRepository, Repository } from "typeorm"
import Task from "../entity/Task";


@EntityRepository(Task)
export class TaskRepository extends Repository<Task>{
    public async findByName(name:string):Promise<Task | undefined>{
        const task = this.findOne({
            where:{
                name,
            }
        })
        return task;
    }
}