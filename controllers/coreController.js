import { videos } from "../db";
import routes from "../routes";

export const home = (req, res) => res.render("home", { pageTitle: "Home", videos });

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password1 },
  } = req;
  if (password != password1) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) => res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => res.redirect(routes.home);

export const logout = (req, res) => res.redirect(routes.home);

export const search = (req, res) => {
  const {
    query: { q: searchQuery },
  } = req;
  res.render("search", { pageTitle: "Search", searchQuery, videos });
};
