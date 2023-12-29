import { NavLink } from "react-router-dom"
import {FaBars , FaTimes} from 'react-icons/fa'
import "./Navbar.scss"
import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
export const Navbar =()=>
{
    const [isnav , setIsnav] = useState(false);

    const changeNav = ()=>
    {
        setIsnav(!isnav);
    }

    const { isLoggedIn } = useAuth();

    useEffect(()=>
    {
        setIsnav(false)
    },[])

    return(
        <>
        <header>
            <div className="container">
                <div className="logo">
                    <h1>DEVION</h1>
                </div>
                <div className="navBtn" onClick={changeNav}>
                    {
                        (isnav)?(
                            <FaTimes /> 
                        ):(<FaBars />)
                    }
                </div>
                <nav className={(isnav)? "active":""}>
                <ul>
                    <li><NavLink className="navlink" onClick={changeNav} to="/">Home</NavLink></li>
                    <li><NavLink className="navlink" onClick={changeNav} to="/about">About</NavLink></li>
                    <li><NavLink className="navlink" onClick={changeNav} to="/contact">Contact</NavLink></li>
                    <li><NavLink className="navlink" onClick={changeNav} to="/services">Services</NavLink></li>
                    {
                        (isLoggedIn)?(<li><NavLink className="navlink" onClick={changeNav} to="/logout"> Logout</NavLink> </li>)
                        :
                        (<>
                            <li><NavLink className="navlink" onClick={changeNav} to="/registration">Signup</NavLink></li>
                            <li><NavLink className="navlink" onClick={changeNav} to="/login">Login</NavLink></li></>)
                    }
                    
                    
                </ul>
            </nav>
            </div>
            
        </header>
        </>
    )
}