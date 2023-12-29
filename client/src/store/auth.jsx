import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services , setServices] = useState([]);

  //function to stored the token in local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken)
    return localStorage.setItem("token", serverToken);
  };


  //check if user logged in 
  let isLoggedIn = !!token;


  //logout functionality

  const logoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  }

  const userAuthentication = async () => {
    if(token)
    {
      try {
        const response = await fetch("http://localhost:5000/api/auth/user",
          {
            mehtod: "GET",
            headers:
            {
              "Authorization": `Bearer ${token}`
            },
          });
  
        if (response.ok) {
          const data = await response.json();
          setUser(data.userData);
        }
      } catch (error) {
        console.log("Error in fetching User Data", error);
      }
    }
  }



  //get services data 

  const getServices = async()=>
  {
    try {

      const response = await fetch("http://localhost:5000/api/data/service",{
        method:"GET",
      }
      );

      const data = await response.json();
      if (response.ok)
      {
        //console.log(data.msg);
        setServices(data.msg);
      }
      
    } catch (error) {
      console.log(`Services front-end :${error}`)
    }
  }


  //jwt authentication , to get current user data 

  useEffect(() => {
    userAuthentication();
    getServices();
  }, [getServices, userAuthentication]);

  return (
    <AuthContext.Provider value={{ storeTokenInLS, logoutUser, isLoggedIn, user , services }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};