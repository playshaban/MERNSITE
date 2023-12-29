import { useEffect } from "react";
import { useAuth } from "../store/auth"
import { useNavigate } from "react-router-dom";

export const Logout= ()=>
{
    const {logoutUser} =useAuth();
    const navigate = useNavigate();

    useEffect(()=>
    {
        logoutUser();
    },[logoutUser]);

    return(
        navigate('/login')
    )
}