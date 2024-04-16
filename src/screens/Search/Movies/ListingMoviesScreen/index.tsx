import { View } from "react-native";
import { useHandleSearch } from "./hooks/HandleSearch";
import ListingMovies from "./partials/ListOfMoviesData";
import SearchTextBar from "./partials/SearchBar";
import { styles } from "./style";
import { useTheme } from "../../../../theme/theming/themeProvider";

const ListingMoviesScreen = () => {
    const {fetchedMovies,handleClearSearch,handleEndReached, handleSearch,isFetchingMovies,noMatchingMovie,searchText}=useHandleSearch();
    const theme = useTheme();
    return (
        <View style={[styles.Container,{backgroundColor:theme.Colors.backgroundColor}]}>
            <SearchTextBar handleClearSearch={handleClearSearch} handleSearch={handleSearch} searchText={searchText}/> 
            <ListingMovies fetchedMovies={fetchedMovies} handleEndReached={handleEndReached} isFetchingMovies={isFetchingMovies} noMatchingMovie={noMatchingMovie} />
        </View>
    );
};
export default ListingMoviesScreen;




