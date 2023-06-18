const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://ak749258:Tyrant12345@cluster0.s236j3n.mongodb.net/goFoodmern?retryWrites=true&w=majority",
 { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});


module.exports = {
    mongoose
};