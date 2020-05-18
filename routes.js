const routes = {
  // Core
  home: "/",
  join: "/join",
  login: "/login",
  logout: "/logout",
  search: "/search",

  //Users
  users: "/users",
  userDetail: (id) => (id ? `/${id}` : "/:id"),
  editProfile: "/edit-profile",
  changePassword: "/change-password",

  // Videos
  videos: "/videos",
  upload: "/upload",
  videoDetail: (id) => (id ? `/${id}` : "/:id"),
  editVideo: "/:id/edit",
  deleteVideo: "/:id/delete",
};

export default routes;
