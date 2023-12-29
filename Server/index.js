require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const connectDb = require('./util/db');
const errorMiddlewaere = require('./middlewares/error-middleware');



const corsOptions= {
    origin:"https://mernsite.vercel.app",
    methods: "GET, POST, PUT , DELETE , PATCH ",
    credentials:true,
}

app.use(cors(corsOptions));


app.use(express.json());

const authRoute = require('./router/auth-router');
const contactRoute = require('./router/contact-router');
const serviceRoute = require('./router/service-router');

app.use("/api/auth" , authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

app.use(errorMiddlewaere);
connectDb().then(()=>
{
    app.listen(PORT , ()=>
    {
        console.log(`server started at ${PORT}`);
    });
});
