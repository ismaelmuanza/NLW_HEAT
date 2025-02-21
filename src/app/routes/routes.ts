import { Router } from "express";
import { userRoutes } from "./users.routes";

const routes = Router()

// userRoutes
routes.use(userRoutes)

export {routes}