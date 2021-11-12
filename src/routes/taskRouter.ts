import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { TasksController } from "../controller/TasksController";


const express = require('express')

const taskRouter = Router()
const taskController = new TasksController()

taskRouter.get('/',taskController.index);

taskRouter.get('/:id',taskController.show);

taskRouter.post('/',
/*celebrate({
    [Segments.BODY]:{
        id:Joi.string().uuid().required(),
        name: Joi.string().required(),
        description: Joi.string().required(),
        task_day: Joi.required()

    }
}),*/taskController.create);

taskRouter.put('/:id',
/*celebrate({
    [Segments.PARAMS]:{
        id:Joi.string().uuid().required()
    },
    [Segments.BODY]:{
        name: Joi.string().required(),
        description: Joi.string().required(),
        task_day: Joi.date().required()
    }
}),*/taskController.update);

taskRouter.delete('/:id',taskController.delete);

export default taskRouter