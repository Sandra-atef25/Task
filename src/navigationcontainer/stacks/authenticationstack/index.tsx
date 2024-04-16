import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../../../screens/authentication/LoginScreen";
import { NavigationProp } from "@react-navigation/native";
import SignUpScreen from "../../../screens/authentication/SignUpScreen";
import { useTheme } from "../../../theme/theming/themeProvider";


export type AuthenticationScreenNames = ["Login", "Register"];// type these manually

export type AuthenticationStackParamList = {
  Login: undefined;
  Register: undefined;
};
export type AuthenticationStackNavigation = NavigationProp<AuthenticationStackParamList>;
const MainStackAuthentication = () => {
  const Stack = createNativeStackNavigator();
  const theme=useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: theme.Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={SignUpScreen} />

    </Stack.Navigator>
  );
};
export default MainStackAuthentication;
