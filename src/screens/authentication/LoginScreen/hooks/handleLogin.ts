import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { AppStackNavigation } from '../../../../navigationcontainer';
import { AuthenticationStackNavigation } from '../../../../navigationcontainer/stacks/authenticationstack';
export const handleLogin=({onAuthenticate})=>{
    const nav =useNavigation<AuthenticationStackNavigation>()
    const[email,setEnteredEmail]=useState('');
    const [password,setEnteredPassword]=useState('');
 
    const handleLoginButton=(email:string,password:string)=>{
            onAuthenticate({email,password})
        
    }
    const handleRegisterButton=()=>{
        nav.navigate("Register");
    }
    const handleEmailInput=(text:string)=>{
        setEnteredEmail(text);
    }
    const handlePasswordInput=(text:string)=>{
        setEnteredPassword(text);
    }
    
    return {handleEmailInput,handlePasswordInput,handleRegisterButton,password,email,handleLoginButton};
}