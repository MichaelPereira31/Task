import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { TasksController } from "../controller/TasksController";


const express = require('express')

const taskRouter = Router()
const taskController = new TasksController()

taskRouter.get('/',taskController.index);

taskRouter.get('/:id',taskController.show);

taskRouter.post('/',taskController.create);

taskRouter.put('/:id',taskController.update);

taskRouter.delete('/:id',taskController.delete);

export default taskRouter
