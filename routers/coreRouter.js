import express from "express";
import routes from "../routes";
import { home, logout, search, getJoin, postJoin, getLogin, postLogin } from "../controllers/coreController";

const coreRouter = express.Router();

coreRouter.get(routes.join, getJoin);
coreRouter.post(routes.join, postJoin);

coreRouter.get(routes.login, getLogin);
coreRouter.post(routes.login, postLogin);

coreRouter.get(routes.home, home);
coreRouter.get(routes.logout, logout);
coreRouter.get(routes.search, search);

export default coreRouter;
