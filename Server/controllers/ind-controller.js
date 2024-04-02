const Ind = require('../models/ind-model');
const nodemailer = require('nodemailer');

const sendEmail = async (to, firstName, lastName , phone , github , linkedin, portfolio, userid , applyDate) => {
    // Create a nodemailer transporter
    let transporter = nodemailer.createTransport({
        host: 'smtp.zoho.in',
        port: 465,
        secure: true, // Use SSL
        auth: {
            user: `${process.env.EMAILID}`,
            pass: `${process.env.EPASS}` 
        }
    });


    const emailText = `
Greetings ${firstName} ${lastName},\n
Below are your application details:\n
Email : ${to} \n
Phone: ${phone}\n
GitHub : ${github} \n
Linkedin: ${linkedin} \n
Portfolio: ${portfolio} \n
User Id : ${userid} \n
Apply Date: ${applyDate} \n
We have successfully received your application. We are currently dealing with a huge traffic and will respond to your application shortly.\n
Thank you,
HR
INDinten.in
    `;

    // Define email options
    let mailOptions = {
        from: 'hr@indintern.in', // Sender address
        to:  to, // Receiver address
        bcc:'indintern.in@gmail.com',
        subject: "Application Recieved | INDintern", // Subject line
        text: emailText // Plain text body
    };

    // Send email
    let info = await transporter.sendMail(mailOptions);
    //console.log("Email sent: ", info.messageId);
};

const registerInd= async(req,res,next)=>
{
    try 
    {
        const {firstName, lastName, email, phone, github, linkedin , portfolio } = req.body;

        if(!firstName || !lastName || !email || !phone || !github || !linkedin || !portfolio )
        {
            return res.status(404).json({message: "All fields required !!"});
        }

        const existingUser = await Ind.findOne({ $or: [{ email }, { phone }, { github }, { linkedin }] });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists. <br></br>Please use a different mail/phone/github/linkedin ." });
        }
        
        // Generate unique userid
        const date = new Date();
        const yearMonth = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}`;
        const userid = `${yearMonth}${phone.slice(-4)}${Math.floor(1000 + Math.random() * 9000)}`.toUpperCase();

        const applyDate = `${date.getDate()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;

        // Create new user account
        const newUser = new Ind({...req.body, userid,applyDate});
        await newUser.save();

       // await sendEmail(email,firstName , lastName , phone, github, linkedin, portfolio , userid , applyDate);

        res.status(201).json({ message: "Application Submitted Successfully.", user: newUser });
    }
    catch(err)
    {
        next(err);
    }
}

module.exports = registerInd;