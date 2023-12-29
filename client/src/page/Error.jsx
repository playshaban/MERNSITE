import { NavLink } from "react-router-dom";
import "./Error.scss";

const Error = ()=>
{
    document.title="Error | MERN-SITE";
    return(
        <section className="main">
            <div className="error-page">
            <div className="content">
                <h1>404</h1>
                <h3>Sorry! Page Not Found</h3>
                <p>
                    Oops! It seems like you are visiting a page that 
                    does not exsists. If you feel that there is an issue feel 
                    free to report it, and we'll look into it. 
                </p>
            </div>
            <div className="btns">
                <NavLink to="/" ><button className="submitBtn">
                    Go Home
                </button></NavLink>
                <NavLink to="/contact" ><button className="secondBtn">
                    Contact US
                </button></NavLink>
                
            </div>
        </div>
        </section>
    )
}

export default Error;