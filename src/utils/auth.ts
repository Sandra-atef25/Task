import axios from "axios";
const API_KEY="AIzaSyAXsVwRqTfT9CxGHuPH2_fD5BHnYq4CblQ";

async function authenticate(mode:string,email:string,password:string){
    let token='';
    //construvct dynamically the URL and send to 2 different things sign up or sign in
    const url =`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
    try{
        const response= await axios.post (url,{
        email:email,
        password:password,
        returnSecureToken:true,});
        token =response.data.idToken;
    }
    catch(err){
        console.log("errrorrrrrr",err);
    }
    //console.log(token);
    return token;
}
export const createUser=async(email:string,password:string)=>{
    //npm install axios
    //https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key='+API_KEY
    //must be a POST request
    //API_Key is that token key so it should be replaced by your api key (it is web api key of your project in firebase)
    //add some data to this http by email and pass data and rescue token always be true
    //those data must be in a form of object fihoum el 3 values 
    /*const response=await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+API_KEY,{
        email:email,
        password:password,
        returnSecureToken:true
    }
    );*/
    return await authenticate('signUp',email,password);
    
}

export async function login (email:string,pass:string){
   return await authenticate('signInWithPassword',email,pass);
   
}