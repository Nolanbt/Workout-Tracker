var express = require("express")
var mongoose = require("mongoose")
var logger = require("morgan")
const PORT = process.env.PORT || 8080;
const app = express();

// app.use(logger("dev"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);


require("./routes/html_routes")(app);
require("./routes/api_routes")(app);


app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});