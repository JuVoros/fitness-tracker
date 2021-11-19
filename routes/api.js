const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .sort({ name: -1 })
    .limit(7)
    .then((dbRange) => {
      res.json(dbRange);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/workouts/:id", (req, res) => {
  console.log(req.body);
  Workout.findByIdAndUpdate(req.params.id, {
    $push: { exercises: req.body },
  })
    .then((updateDb) => {
      res.json(updateDb);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/workouts", (req, res) => {
  Workout.create({})
    .then((insertDb) => {
      res.json(insertDb);
    })
    .catch((err) => {
      res.json(err);
    });
});

// router.delete("/", (req,res)=>{
//   Workout.delete({})
// })

module.exports = router;
