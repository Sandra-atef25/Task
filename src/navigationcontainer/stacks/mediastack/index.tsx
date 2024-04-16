import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeStack from "./HomeStack";
import SearchStack from "./SearchStack";
import SettingsStack from "./SettingsStack";
import WishListStack from "./WishlistStack";

import FavoritesContextProvider from "../../../store/FavoritesContext/FavoritesContext";
import { NavigationProp } from "@react-navigation/native";
import { useTheme } from "../../../theme/theming/themeProvider";


export type MediaScreenNames = ["HomeScreens", "SearchScreen", "WishListScreen", "SettingsScreens"];// type these manually

export type MediaStackParamList = {
  HomeScreens: undefined;
  SearchScreen: undefined;
  WishListScreen: undefined;
  SettingsScreens: undefined;
};
export type MediaStackNavigation = NavigationProp<MediaStackParamList>;
const MainStackTwo = () => {
  const Tab = createBottomTabNavigator();
  const theme=useTheme();
  return (
    <>
      <FavoritesContextProvider>
        <Tab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: theme.Colors.backgroundColor },
            tabBarStyle: { backgroundColor: theme.Colors.backgroundColor},
            tabBarActiveTintColor: theme.Colors.red
          }}
        >

          <Tab.Screen
            name="HomeScreens"
            component={HomeStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
              tabBarLabel: "Home",
              headerShown: false,
            }}
          />
               
          <Tab.Screen
            name="SearchScreen"
            component={SearchStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="search" color={color} size={size} />
              ),
              tabBarLabel: "Search",
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="WishListScreen"
            component={WishListStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="heart" color={color} size={size} />
              ),
              tabBarLabel: "WishList",
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="SettingsScreens"
            component={SettingsStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="settings" color={color} size={size} />
              ),
              tabBarLabel: "Settings",
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </FavoritesContextProvider>
    </>
  );
};
export default MainStackTwo;
