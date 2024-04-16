import { NavigationProp, RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SettingsDetails from "../../../../screens/Settings/SettingsDetails";
import SettingsScreen from "../../../../screens/Settings/SettingsScreen";
import { useTheme } from "../../../../theme/theming/themeProvider";


export type SettingsScreenNames = ["Settings", "SettingsDetails"]; // type these manually

export type SettingsStackParamList ={
  Settings:undefined;
  SettingsDetails:undefined;
};
export type SettingsStackNavigation = NavigationProp<SettingsStackParamList>;
export type SettingsRouteProp=RouteProp<SettingsStackParamList>;
const SettingsStack = () => {
  const Stack = createNativeStackNavigator();
  const theme=useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{headerStyle: { backgroundColor:theme.Colors.backgroundColor, } }}
    >
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerTintColor: theme.Colors.TextColor }} />
      <Stack.Screen
        name="SettingsDetails"
        component={SettingsDetails}
        options={{
          headerTitle: "Settings Details",
          headerTintColor: theme.Colors.TextColor
        }}
      />
    </Stack.Navigator>
  );
};
export default SettingsStack;
