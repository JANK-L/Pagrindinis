import express from "express";
import Workout from "../models/pratimoModelis.js";
import * as controller from "../controllers/controller.js";

const router = express.Router();

router.route("/").get(controller.getWorkouts).post(controller.postWorkout);

router
  .route("/:id")
  .get(controller.getWorkout)
  .delete(controller.deleteWorkout)
  .patch(controller.updateWorkout);

export default router;
