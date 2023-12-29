import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';
const Registration = () => {

    document.title = "SignUp | Davion";
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    })

    const navigate = useNavigate();

    const { storeTokenInLS } = useAuth();

    //hadle input
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser(
            {
                ...user, [name]: value
            }
        )
    }

    //handle Registration
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://mern-website-with-admin-panel.vercel.app/api/auth/register`,
                {
                    method: "POST",
                    headers:
                    {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(user),
                });
            const res_data = await response.json();
            console.log(res_data);
            if (response.ok) {
                storeTokenInLS(res_data.token);
                toast.success("Registration Successfull");
                navigate("/");
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    password: ""
                })
            }
            else 
            {
                toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message);
            }
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <section className="main">
            <div className="twocols">
                <div className="left">
                    <img src="images/register.png" alt="girl signing UP"
                        width={400}
                    />
                </div>
                <div className="right">
                    <form onSubmit={handleSubmit}>
                        <h1>SignUp</h1>
                        <div className="field">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" value={user.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={user.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="phone">Mobile No.</label>
                            <input type="text" name="phone" value={user.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" value={user.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="btn">
                            <input type="submit" className="submitBtn" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Registration;
