import { View } from "react-native";
import { useSearchandFilterHandle } from "./hooks/HandleSearchandFilter";
import ClearFilterButton from "./partials/ClearFilter";
import ListOfGenres from "./partials/ListOfGenres";
import ListOfSeriesData from "./partials/ListOfSeriesData";
import SearchTextBar from "./partials/SearchBar";
import { styles } from "./style";
import { useTheme, withTheme } from "../../../../theme/theming/themeProvider";

function FavoritesSeriesScreen() {
  const theme=useTheme();
  const { fetchedFavoriteSeries, handleClearFilter, setSearchText, setSelectedId, handleClearSearch, isFetching, noMatchingSeries, searchText, selectedId } = useSearchandFilterHandle();
  return (
    <View style={[styles.Container, 
    {backgroundColor: theme.Colors.backgroundColor}]}>
      <SearchTextBar handleClearSearch={handleClearSearch} handleSearch={setSearchText} searchText={searchText} />
      <ClearFilterButton handleClearFilter={handleClearFilter}/>
      <ListOfGenres genreFilter={selectedId} handleGenreFilter={() => { }} setGenreFilter={setSelectedId} />
      <ListOfSeriesData fetchedSeries={fetchedFavoriteSeries} handleEndReached={null} isFetchingSeries={isFetching} noMatchingSeries={noMatchingSeries} />
    </View>
  );
};
export default FavoritesSeriesScreen;
