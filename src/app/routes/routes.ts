import { Router } from "express";
import { tagsRoutes } from "./tags.routes";
import { userRoutes } from "./users.routes";

const routes = Router()

//Routes

// userRoutes
routes.use(userRoutes)

// tagsRoutes
routes.use(tagsRoutes)

export {routes}