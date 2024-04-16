import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { getFocusedRouteNameFromRoute, NavigationProp, RouteProp } from "@react-navigation/native";
import { useTheme } from "../../theme/theming/themeProvider";

const getStyle = (route: RouteProp<any>,theme) => {
 
  const routeName = getFocusedRouteNameFromRoute(route);
  switch (routeName) {
    case "TheMovieSelected":
    case "SeriesDetails":
      return { height: 0, width: 0, zIndex: -1 };
    default:
      return { backgroundColor: theme.Colors.backgroundColor, paddingTop: 10 };

  }

}
export type ScreenNames = ["Movies", "Series"];// type these manually

export type ScreenStackParamList = {
  Movies: undefined;
  Series: undefined;
};
export type ScreenStackNavigation = NavigationProp<ScreenStackParamList>;
const StackAll = ({ MoviesStack ,TVStack}) => {
  const theme=useTheme();
  const MaterialTop = createMaterialTopTabNavigator();

  return (
    <MaterialTop.Navigator
      initialRouteName="Movies"
      screenOptions={{ tabBarStyle: { backgroundColor: theme.Colors.backgroundColor, paddingTop: 10, }, }} >
      <MaterialTop.Screen name="Movies" component={MoviesStack} options={({ route }) => ({ tabBarStyle: getStyle(route,theme), tabBarLabelStyle: { color: theme.Colors.TextColor, fontWeight: 'bold' } })} />
      <MaterialTop.Screen name = "Series" component={TVStack} options={({ route }) => ({ tabBarStyle: getStyle(route,theme),tabBarLabelStyle:{color:theme.Colors.TextColor,fontWeight:'bold'}})}/>

    </MaterialTop.Navigator>

  );
};

export default StackAll;

