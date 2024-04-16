import { View } from "react-native";
import CustomTextInput from "../../../../../components/atoms/CustomTextInput";
import { handleLogin } from "../../hooks/handleLogin";
import PrimaryButton from "../../../../../components/atoms/PrimaryButton";
import Gradient from "../../../../../components/atoms/Gradient";
import { styles } from "./style";
import { useTheme } from "../../../../../theme/theming/themeProvider";

const LoginForm = ({ onAuthenticate }) => {
  const theme=useTheme();
  const {
    handleLoginButton,
    handleRegisterButton,
    handleEmailInput,
    handlePasswordInput,
    password,
    email,
  } = handleLogin({ onAuthenticate });
  return (
    <Gradient>
      <View style={styles.container}>
        <CustomTextInput
          inputHandler={handleEmailInput}
          placeholder="Please Enter Your Email"
          textLabel="Email"
          value={email}
          isInvalid={false}
        />
        <CustomTextInput
          inputHandler={handlePasswordInput}
          placeholder="Please Enter Your Password"
          textLabel="Password"
          value={password}
          isInvalid={false}
          password={true}
        />
        <View style={styles.innerCon}>
          <PrimaryButton
            color={theme.Colors.green}
            name="Register"
            onPress={handleRegisterButton}
          />
          <PrimaryButton
            color={theme.Colors.red}
            name="Login"
            onPress={() => handleLoginButton(email, password)}
          />
        </View>
      </View>
    </Gradient>
  );
};
export default LoginForm;
