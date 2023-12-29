const mongoose = require("mongoose");
const URL = process.env.DB;
const connectDb = async ()=>
{
    try{
        await mongoose.connect(URL);
        console.log("Database Connected");
    }
    catch
    {
        console.error("Database Connection Faild");
        process.exit(0);
    }
}

module.exports = connectDb;