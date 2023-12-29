import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';
const Login = () => {

    const URL= "http://localhost:5000/api/auth/login";
    const navigate = useNavigate();
    document.title = "Login | Davion";
    const [user, setUser] = useState({
        email: "",
        password: ""
    })


    const { storeTokenInLS }  = useAuth();

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

    //handle Login

    const handleLogin = async(e)=>
    {
        e.preventDefault();
        try {
            const response = await fetch(URL,
            {
                method:"POST",
                headers :
                {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(user)
            })
            const res_data = await response.json();
            if(response.ok)
            {
                setUser({ email: "",
                password: ""});
                storeTokenInLS(res_data.token);
                toast.success("Login Successfull");
                console.log("Login Form ", response);
                navigate("/");
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
                    <img src="images/login.png" alt="girl signing UP"
                        width={400}
                    />
                </div>
                <div className="right">
                    <form onSubmit={handleLogin}>
                        <h1>Login</h1>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={user.email}
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
                            <input type="submit" className="submitBtn" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Login;