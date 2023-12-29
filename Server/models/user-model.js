const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

//creating a schema
const userSchema = new mongoose.Schema(
    {
        username:
        {
            type: String,
            require : true
        },
        email:
        {
            type: String , 
            require : true
        },

        phone:
        {
            type : String,
            require:true
        },
        password:
        {
            type : String , 
            require : true
        },
        isAdmin: 
        {
            type:Boolean,
            default : false,
        }

    }
);


// using pre method of sava, for hashing the password \

userSchema.pre("save", async function(next)
{
    const user = this;

    if(!user.isModified("password"))
    {
        next();
    }

    try 
    {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    }
    catch(err)
    {
        next(err);
    }
});



//generating token 
userSchema.methods.generateToken =  async function() 
{
    try
    {
        return jwt.sign( 
            {
                userId: this._id.toString(),
                email : this.email,
                isAdmin : this.isAdmin
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "30d"
            }
        );
    }
    catch(err)
    {
        console.log(err);
    }
};


//method for comparing password
userSchema.methods.comparePassword = async function(currPass)
{
    return bcrypt.compare(currPass,this.password)
}

//defining the model 

const User = new mongoose.model("User", userSchema);

module.exports = User;