import { Router } from "express";
import { tagsRoutes } from "./tags.routes";
import { userRoutes } from "./users.routes";
import { authenticateUserRoutes } from "./authenticateUser.routes";
import { complimentsRoutes } from "./compliments.routes";

const routes = Router()

//Routes

// userRoutes
routes.use(userRoutes)
routes.use(authenticateUserRoutes)

// tagsRoutes
routes.use(tagsRoutes)

// complimentsRoutes
routes.use(complimentsRoutes)

export {routes}