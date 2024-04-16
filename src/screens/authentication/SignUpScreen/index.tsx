import { useContext, useState } from "react";
import { createUser } from "../../../utils/auth";
import { saveData } from "../../../utils/AsyncStorage";
import LoadingOverlay from "../../../components/atoms/LoadingOverlay";
import SignUpForm from "./partials/signupform";
import { Alert } from "react-native";
import { AuthContext } from "../../../store/AuthContext/authContext";
import { useNavigation } from "@react-navigation/native";
import { AppStackNavigation } from "../../../navigationcontainer";
const SignUpScreen = () => {
  const navigation=useNavigation<AppStackNavigation>();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authctx = useContext(AuthContext);
  async function signUpHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      //we need to get the token for every user so we will get it from the respomnse .data ,idToken from axios
      authctx.authenticate(token);
      navigation.navigate("MainStackTwo");
    } catch (err) {
      console.log(err);
      Alert.alert(
        "Authentication Failed ",
        "could not sign up , please check your credentials and try again"
      );
      setIsAuthenticating(false);
    }
    setIsAuthenticating(false); //adding this new stack o authenticatedstack we could not have 2 stack =s running so this state can't be  updated as we moved to another stack
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Creating User......" />;
  }

  return <SignUpForm onAuthenticate={signUpHandler} />;
};

export default SignUpScreen;
