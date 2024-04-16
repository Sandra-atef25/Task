import { View } from "react-native";
import { useHandleSearch } from "./hooks/HandleSearch";
import Listingseries from "./partials/ListOfSeriesData";
import SearchTextBar from "./partials/SearchBar";
import { styles } from "./style";
import { useTheme } from "../../../../theme/theming/themeProvider";

const ListingTVScreen = () => {
    const { fetchedSeries, handleClearSearch, handleEndReached, handleSearch, isFetchingSeries, noMatchingSeries, searchText } = useHandleSearch();
    const theme = useTheme()
    return (
        <View style={[styles.Container,{backgroundColor:theme.Colors.backgroundColor}]}>
            <SearchTextBar handleClearSearch={handleClearSearch} handleSearch={handleSearch} searchText={searchText} />
            <Listingseries fetchedSeries={fetchedSeries} handleEndReached={handleEndReached} isFetchingSeries={isFetchingSeries} noMatchingSeries={noMatchingSeries} />
        </View>
    );
};
export default ListingTVScreen;