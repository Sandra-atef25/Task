import { View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import CustomImageDetails from '../../../molecules/CustomImageDetailsSreen';
import BodyDetailsSeries from '../../../molecules/series/BodyDetails';
import { seriesDetailsProps } from './interface/interface';
import { useTheme } from '../../../../theme/theming/themeProvider';
const DetailsSeries= ({ posterPath, seriesIsFavorite, heartButtonPressHandler, TvSeries, matchingGenres }:seriesDetailsProps) => {
    const navigation =useNavigation();
    const theme=useTheme();
    const pressHandle =()=>{
        navigation.goBack();
    }
    return (
        <View style={[styles.Container,{
            backgroundColor: theme.Colors.backgroundColor}]}>
            <CustomImageDetails dataIsFavorite={seriesIsFavorite} heartButtonPressHandler={heartButtonPressHandler} posterPath={posterPath} pressHandle={pressHandle}/>
            <BodyDetailsSeries TvSeries={TvSeries} matchingGenres={matchingGenres}/>
        </View>
    );
}
export default DetailsSeries;