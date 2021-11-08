import { Router } from "express";
import { TasksController } from "../controller/TasksController"

const express = require('express')

const taskRouter = Router()
const taskController = new TasksController()

taskRouter.get('/',taskController.index);

taskRouter.post('/',taskController.create);

export default taskRouter