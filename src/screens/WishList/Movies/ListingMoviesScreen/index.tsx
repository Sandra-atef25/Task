import { View } from "react-native";
import { useSearchandFilterHandle } from "./hooks/HandleSearchandFilter";
import ClearFilterButton from "./partials/ClearFilter";
import ListOfGenres from "./partials/ListOfGenres";
import ListOfMoviesData from "./partials/ListOfMoviesData";
import SearchTextBar from "./partials/SearchBar";
import { styles } from "./style";
import { useTheme } from "../../../../theme/theming/themeProvider";

function FavoritesMoviesScreen() {
  const theme=useTheme();
    const {fetchedFavoriteMovies,handleClearFilter,setSearchText,setSelectedId,handleClearSearch,isFetching,noMatchingMovie, searchText,selectedId}=useSearchandFilterHandle();
  return (
    <View style={[styles.Container,{backgroundColor:theme.Colors.backgroundColor}]}>
        <SearchTextBar handleClearSearch={handleClearSearch} handleSearch={setSearchText} searchText={searchText}/>
        <ClearFilterButton handleClearFilter={handleClearFilter}/>
        <ListOfGenres genreFilter={selectedId} handleGenreFilter={()=>{}} setGenreFilter={setSelectedId}/>
        <ListOfMoviesData  fetchedMovies={fetchedFavoriteMovies} handleEndReached={null} isFetchingMovies={isFetching} noMatchingMovie={noMatchingMovie}/>
      
    </View>
  );
};
export default FavoritesMoviesScreen;
