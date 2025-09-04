import { error } from "console";
import Workout from "../models/pratimoModelis.js";
import mongoose from "mongoose";

// GET - paimti visus pratimus
export const getWorkouts = async (req, res) => {
  const pratimai = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(pratimai);
};

// GET - paimti viena pratimus
export const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "tokio pratimo nera." });
  }

  const pratimas = await Workout.findById(id);

  if (!pratimas) {
    return res.status(404).json({ error: "tokio pratimo nera." });
  }
  res.status(200).json(pratimas);
};

// POST - prideti nuaja pratima
export const postWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!load) {
    emptyFields.push("load");
  }
  if (!reps) {
    emptyFields.push("reps");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Prasome uzpildyti visus laukus", emptyFields });
  }

  try {
    const pratimas = await Workout.create({ title, reps, load });
    res.status(200).json(pratimas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PATCH - redaguoti viena pratima
export const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "tokio pratimo nera." });
  }

  const pratimas = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!pratimas) {
    return res.status(404).json({ error: "tokio pratimo nera." });
  }

  res.status(200).json(pratimas);
};

// DELETE - pasalinti viena pratima
export const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "tokio pratimo nera." });
  }

  const pratimas = await Workout.findOneAndDelete({ _id: id });

  if (!pratimas) {
    return res.status(404).json({ error: "tokio pratimo nera." });
  }

  res.status(200).json(pratimas);
};
