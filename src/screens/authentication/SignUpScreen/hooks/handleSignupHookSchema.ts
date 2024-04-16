import * as Yup from 'yup';
import { retrieveData, saveData } from '../../../../utils/AsyncStorage';
import { useDispatch } from 'react-redux';
import { createnewUser } from '../../../../store/redux/userRedux';

export const handleSignUpschema=({onAuthenticate})=>{
    const dispatch=useDispatch();
    const signUpSchema=Yup.object().shape({
        userName:Yup.string().min(3,'Must be Longer than 3 Characters').max(20,'too long, it should be less than 20 characters').required('Required'),
        email: Yup.string().email('Invalid Email').matches(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/).required('Required'),
        password: Yup.string().min(8).matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,"Must contain Minimum 8 characters,at least one uppercase letter, one special character, one number").required('Required'),
        ConfirmPassword: Yup.string().min(8).oneOf([Yup.ref('password')],"Your passwords don't match").required('Required')
    });
    const handleUsers=async(userName:string,email:string)=>{
        try{
            let existingUsers=await retrieveData("users")
            const updatedUsers = [...existingUsers,{email:email,name:userName} ];
            saveData("users",updatedUsers);
            dispatch(createnewUser(userName));
            }catch(error){
                console.log(error);
            }
    }
    const handleSignUpButton=(email:string,password:string,userName:string)=>{
        onAuthenticate({email,password});
        handleUsers(userName,email);
        
    }
    return {signUpSchema,handleSignUpButton};
}