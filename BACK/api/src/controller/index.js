const express = require("express");
const router = express.Router();
const showsMovie = require("../domain/services/service-show-movie");
const showsSeries = require("../domain/services/service-show-series");
const { upload } = require("../middlewares/files.middleware");

router.get("/shows/movie", showsMovie.GetAll);
router.get("/shows/series", showsSeries.GetAll);
router.post("/shows", upload.single("url"), showsMovie.Create);
router.put("/shows/:id", upload.single("url"), showsMovie.PutImage);

module.exports = router;
