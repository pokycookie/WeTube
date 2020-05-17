import express from "express";
import routes from "../routes";
import { home, join, login, logout, search } from "../controllers/coreController";

const coreRouter = express.Router();

coreRouter.get(routes.home, home);
coreRouter.get(routes.join, join);
coreRouter.get(routes.login, login);
coreRouter.get(routes.logout, logout);
coreRouter.get(routes.search, search);

export default coreRouter;
