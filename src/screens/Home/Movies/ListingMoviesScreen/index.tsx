import { View } from "react-native";
import ListOfMoviesData from "./partials/ListOfMoviesCard";
import ListOfGenres from "./partials/ListOfGenres";
import ClearFilter from "./partials/ClearFilter";
import { useFetchingMovies } from "./hooks/HandleFetchingMoviesData";
import { styles } from "./style";
import { useTheme } from "../../../../theme/theming/themeProvider";
const ListingMoviesScreen = () => {
    const theme=useTheme();
    const{fetchedMovies,genreFilter,handleClearFilter,handleEndReached,handleGenreFilter,isFetchingMovies,noMatchingMovie,setGenreFilter}=useFetchingMovies();
    return (
        <View style={[styles.Container,{
            backgroundColor:theme.Colors.backgroundColor}]}>
            <ClearFilter  handleClearFilter={handleClearFilter}/>
            <ListOfGenres genreFilter={genreFilter} handleGenreFilter={handleGenreFilter} setGenreFilter={setGenreFilter}/>
            <ListOfMoviesData fetchedMovies={fetchedMovies} handleEndReached={handleEndReached} isFetchingMovies={isFetchingMovies}  noMatchingMovie={noMatchingMovie} />
        </View>
    );
};
export default ListingMoviesScreen;
