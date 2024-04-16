import { FlatList, View } from 'react-native';
import { styles } from './style';
import Title from '../../atoms/Title';
import LoadingOverlay from '../../atoms/LoadingOverlay';
import { listingDataProps } from './interface/interface';
import { useTheme } from '../../../theme/theming/themeProvider';

const Listing = ({ noMatchingData, fetchedData, renderData, handleEndReached, isFetchingData, title }:listingDataProps) => {
    const theme=useTheme();
    return (
        <View style={styles.DataContainer}>
            {
                !noMatchingData &&
                <FlatList<any> data={fetchedData} renderItem={renderData} keyExtractor={(item) => item.id} numColumns={2}
                    onEndReached={handleEndReached} ListFooterComponent={
                        isFetchingData?<LoadingOverlay/>:null
                    }></FlatList>
            }
            {
                noMatchingData &&
                <Title color={theme.Colors.red} fontSize={30} title={title} fontWeight="normal"/>

            }
        </View>

    );

}
export default Listing;
