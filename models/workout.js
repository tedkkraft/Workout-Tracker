const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: ()=> new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        require: "Enter an excercise type"
      },
      name: {
        type: String,
        trim: true,
        require: "Enter an excercise name"
      },
      duration: {
        type: Number,
        require: "Enter an excercise duration"
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      }
  }]
});
  
  const Workout = mongoose.model("Workout", WorkoutSchema);
  
  module.exports = Workout;