const router = require("express").Router();
const Workout = require("../models/workout.js");

//Create a new workout
router.post("/api/workouts", ({ body }, res) => {
    const workout = new Workout(body);
    Workout.create(workout)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//Update a workout
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.update(
        {
          _id: mongojs.ObjectId(req.params.id)
        },
        {
          $set: {
            type: req.body.type,
            name: req.body.name,
            duration: req.body.duration,
            weight: req.body.weight,
            reps: req.body.reps,
            sets: req.body.sets,
            distance: req.body.distance,
            modified: Date.now()
          }
        },
        (error, data) => {
          if (error) {
            res.send(error);
          } else {
            res.send(data);
          }
        }
    );
});

//Get all workouts
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts); 
        })
        .catch(err => {
            res.json(err); 
        }); 
});

//Get workouts for specified range
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .sort({
            "day": 1
        })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});



router.delete()

module.exports = router;