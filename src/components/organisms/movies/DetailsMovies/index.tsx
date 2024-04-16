import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import CustomImageDetails from '../../../molecules/CustomImageDetailsSreen';
import BodyDetails from '../../../molecules/movies/BodyDetails';
import { movieDetailsScreenProp } from './interface/interface';
import { useTheme } from '../../../../theme/theming/themeProvider';
const DetailsMovies = ({ posterPath, movieIsFavorite, heartButtonPressHandler, Movie, matchingGenres }: movieDetailsScreenProp) => {
    const navigation = useNavigation();
    const theme=useTheme();
    const pressHandle = () => {
        navigation.goBack();
    }
    return (
        <View style={[styles.Container,{
            backgroundColor:theme.Colors.backgroundColor}]}>
            <CustomImageDetails dataIsFavorite={movieIsFavorite} heartButtonPressHandler={heartButtonPressHandler} posterPath={posterPath} pressHandle={pressHandle} />
            <BodyDetails Movie={Movie} matchingGenres={matchingGenres} />
        </View>
    );
};
export default DetailsMovies;