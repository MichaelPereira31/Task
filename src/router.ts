import { Router } from "express"
import taskRouter from "./task/routes/taskRouter"

const express = require('express')

const routes = Router()

routes.use('/task',taskRouter)

export default routes

