export const upload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Viedo" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });