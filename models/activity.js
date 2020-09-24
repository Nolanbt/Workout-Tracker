const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const activitySchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date
        },
        excercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise name"
                },
                duration: {
                    type: Number,
                    required: "Enter a duration for the exercise"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    }
)

const Workout = mongoose.model("Workout", activitySchema);

module.exports = Workout;