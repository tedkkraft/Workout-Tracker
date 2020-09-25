const router = require("express").Router();
const Workout = require("../models/workout.js");

//Create a new workout
router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//Update a workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    ).then(dbWorkout => {
      res.json(dbWorkout)
    }).catch(err => {
      res.json(err);
    });
});

//Get all workouts
router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(dbWorkouts => {
            res.json(dbWorkouts); 
        })
        .catch(err => {
            res.json(err); 
        }); 
});

//Get workouts for specified range
router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});


module.exports = router;