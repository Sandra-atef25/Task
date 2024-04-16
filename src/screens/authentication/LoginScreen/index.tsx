import {useContext, useState} from 'react';
import { login } from '../../../utils/auth';
import { Alert } from 'react-native';
import { AuthContext } from '../../../store/AuthContext/authContext';
import LoadingOverlay from '../../../components/atoms/LoadingOverlay';
import LoginForm from './partials/LoginForm';
import { useNavigation } from '@react-navigation/native';
import { AppStackNavigation } from '../../../navigationcontainer';
import { retrieveData, saveData } from '../../../utils/AsyncStorage';
import { useDispatch } from 'react-redux';
import { createnewUser } from '../../../store/redux/userRedux';
function LoginScreen() {
  
  const dispatch =useDispatch();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authctx=useContext(AuthContext);
  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try{
      
      const token =  await login(email, password);
      const users=await retrieveData("users");
      users.map((user)=>{
        if(user.email===email){
          dispatch(createnewUser(user.name));
        }
      })
        
        
      authctx.authenticate(token);
    }
    catch (err){
      Alert.alert("Authentication Failed ",
      "could not log in , please check your credentials and try again");
    }
    
    setIsAuthenticating(false);
  }
  if(isAuthenticating){
    return <LoadingOverlay message="Logging in User......"/>
  }
  return <LoginForm onAuthenticate={loginHandler}/>;
}

export default LoginScreen;
