//to store the valid credentials of log in user and use it anywhere else in code
import { ReactNode, createContext, useState } from "react";
import React from "react";
export const AuthContext = createContext ({
    token:'',
    isAuthenticated:false,
    authenticate:(token)=>{

    },
    logout:()=>{

    }
});
//manage auth context state and wrap all children
export function AuthContextProvider({children}:{children:ReactNode}){
    const[authToken,setAuthToken]=useState();//initially no  one in is authenticated so it is undefined initially

    function authenticate (token){
        //it's a funtion that should be triggered if a user is authenticated successfully
        setAuthToken(token);
        //store the token to asyncstorage by setItem
    }
    function logout(){
        setAuthToken(null);
        //remove the token from async storage once log out 
    }
    const value= {
        token:authToken,
        isAuthenticated:!!authToken,//convert this value wether it is truethy pr falsey to boolean 
        authenticate:authenticate,
        logout:logout
    };
    return(
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}