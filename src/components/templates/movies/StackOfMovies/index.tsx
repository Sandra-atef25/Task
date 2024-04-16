import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationProp } from "@react-navigation/native";
import { MoviesProps } from "../../../../models/Movies";
import { useTheme } from "../../../../theme/theming/themeProvider";

export type MoviesScreenNames = ["ListingMovies", "TheMovieSelected"];// type these manually
export type MovieParams = {
    movieDetails: MoviesProps
}
export type MoviesStackParamList = {
    ListingMovies: undefined;
    TheMovieSelected: MovieParams;
};
export type MoviesStackNavigation = NavigationProp<MoviesStackParamList>;
const StackOfMovies = ({ ListingMoviesScreen, DetailsMoviesScreen }) => {
    const theme=useTheme();
    const stack = createNativeStackNavigator<MoviesStackParamList>();
    return (
        <stack.Navigator initialRouteName="ListingMovies" screenOptions={{ headerStyle: { backgroundColor: theme.Colors.backgroundColor} }}>
            <stack.Screen name="ListingMovies" component={ListingMoviesScreen} options={{ headerShown: false }} />
            <stack.Screen name="TheMovieSelected" component={DetailsMoviesScreen} options={{ headerShown: false }} />
        </stack.Navigator>
    );
};
export default StackOfMovies;