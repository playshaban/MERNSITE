import { useState } from "react";
import { useAuth } from "../store/auth";
import "./Contact.scss";
import { toast } from 'react-toastify';
const Contact = () => {

    document.title = "Contact | Davion";


    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: ""
    })

    const[msglen, setMsglen] = useState(500);


    //get current contact details form context 
    const [userData, setuserData] = useState(true);
    const { user } = useAuth();

    if (userData && user) {
        setContact(
            {
                username: user.username,
                email: user.email,
                message: "",
            }
        )

        setuserData(false);
    }


    //hadle input
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if(name==="message")
        {
            setMsglen(500-value.length)
            if(value.length === 500) return;
            
        }
        setContact(
            {
                ...contact, [name]: value
            }
        )
    }

    //handle Contact

    const handleContact = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/form/contact',
                {
                    method: "POST",
                    headers:
                    {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(contact)
                })
            const res_data = await response.json();

            if (response.ok) {
                toast.success("Message Sent");
                setContact({
                    username: "",
                    email: "",
                    message: ""
                })
            }
            else {
                toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message);
            }
        }
        catch
        {
            toast.error("Connection Error");
            console.log(err);
        }
    }

    return (
        <section className="main">
            <h1 className="main-heading">Contact</h1>
            <div className="twocols">
                <div className="left">
                    <img src="images/support.png" alt="girl signing UP"
                        width={400}
                    />
                </div>
                <div className="right">
                    <form onSubmit={handleContact}>
                        <h1>Contact Us</h1>
                        <div className="field">
                            <label htmlFor="contactname">Name</label>
                            <input type="text" name="username" value={contact.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={contact.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" value={contact.message}
                                rows={10}
                                onChange={handleChange} >
                            </textarea>
                            <span style={{'color':'gray'}}>Limit {msglen}</span>
                        </div>
                        <div className="btn">
                            <input type="submit" className="submitBtn" value="Contact" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.10530444769!2d77.06196247559782!3d28.26482360068349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04df73812c16b%3A0x
            458f4ebb5de0cf33!2sGD%20Goenka%20University%2C%20Guru
            gram!5e0!3m2!1sen!2sin!4v1702063550413!5m2!1sen!2sin" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}
export default Contact;