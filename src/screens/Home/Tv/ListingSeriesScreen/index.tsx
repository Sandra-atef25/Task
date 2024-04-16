import { View } from "react-native";
import ListOfSeriesData from "./partials/ListOfSeriesCard";
import ListOfGenres from "./partials/ListOfGenres";
import ClearFilter from "./partials/ClearFilter";
import { useFetchingSeriesData } from "./hooks/HandleFetchingSeriesData";
import { styles } from "./style";
import { useTheme } from "../../../../theme/theming/themeProvider";
const ListingSeriesScreen = () => {
    const theme=useTheme();
    const { fetchedSeries, genreFilter, handleClearFilter, handleEndReached, handleGenreFilter, isFetchingSeries, noMatchingSeries, setGenreFilter } = useFetchingSeriesData();
    return (
        <View style={[styles.Container,{backgroundColor:theme.Colors.backgroundColor}]}>
            <ClearFilter handleClearFilter={handleClearFilter} />
            <ListOfGenres genreFilter={genreFilter} handleGenreFilter={handleGenreFilter} setGenreFilter={setGenreFilter} />
            <ListOfSeriesData fetchedSeries={fetchedSeries} handleEndReached={handleEndReached} isFetchingSeries={isFetchingSeries} noMatchingSeries={noMatchingSeries} />
        </View>
    );
};
export default ListingSeriesScreen;
