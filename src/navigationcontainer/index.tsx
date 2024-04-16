import { StatusBar } from "expo-status-bar";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainStackAuthentication from "./stacks/authenticationstack";
import MainStackTwo from "./stacks/mediastack";
import { Provider } from "react-redux";
import { store } from "../store/redux/store";
import {
  AuthContext,
  AuthContextProvider,
} from "../store/AuthContext/authContext";
import { useContext } from "react";
import { ThemeProvider, useTheme } from "../theme/theming/themeProvider";

//App thst is the Start of the program it contains 2 stacks one for authentication and the other for
//internal structure.
export type MoviesScreenNames = ["MainStack", "MainStackTwo"]; // type these manually
export type RootStackParamList = {
  MainStack: undefined;
  MainStackTwo: undefined;
};
export type AppStackNavigation = NavigationProp<RootStackParamList>;
const Stack = createNativeStackNavigator();

function Navigation() {
  const authCtx = useContext(AuthContext);

  //conditionally render different stacks one if we are not authenticated yest then login or sign up otherwise ago to welcome screen

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!authCtx.isAuthenticated && (
          <Stack.Screen name="MainStack" component={MainStackAuthentication} />
        )}
        {authCtx.isAuthenticated && (
          <Stack.Screen name="MainStackTwo" component={MainStackTwo} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const AppRoute = () => {
  const theme=useTheme();
  return (
    <>
      <StatusBar style="light" />
      
        <Provider store={store}>
          <AuthContextProvider>
            <Navigation />
          </AuthContextProvider>
        </Provider>
    
    </>
  );
};
export default AppRoute;
