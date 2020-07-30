const mongooose = require("mongoose");
const { closeSync } = require("fs-extra");

 mongooose.connect(process.env.MONGODB_URI,{
     useUnifiedTopology: true,
    useNewUrlParser : true
 })
     .then(db => console.log("db in connected"))
     .catch(err => console.error(err));