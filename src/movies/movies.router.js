const router = require("express").Router();
const controller = require("./movies.controller");
const theatersRouter = require("../theaters/theaters.router");
const reviewsRouter = require("../reviews/reviews.router");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.use("/:movieId/theaters", controller.checkMovieId, theatersRouter);
router.use("/:movieId/reviews", controller.checkMovieId, reviewsRouter);


router.route("/")
.get(controller.list)
.all(methodNotAllowed);

router.route("/:movieId")
    .get(controller.read)
    .all(methodNotAllowed);
module.exports = router; 