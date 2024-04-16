import { ScrollView, View, Text } from 'react-native';
import { ItemData } from '../../../../models/Genres';
import Title from '../../../atoms/Title';
import { styles } from './style';
import { tvDetailsProps } from './interface/interface';
import { useTheme } from '../../../../theme/theming/themeProvider';

const BodyDetailsSeries = ({ TvSeries, matchingGenres }:tvDetailsProps) => {
    const theme=useTheme();
    return (
        <ScrollView>
            <Title title={TvSeries.name} color={theme.Colors.TextColor} fontWeight="bold" fontSize={20} />
            <Title title={TvSeries.id.toString()} color={theme.Colors.TextColor} fontWeight="normal" fontSize={16} />
            <Title title={TvSeries.backdrop_path} color={theme.Colors.TextColor} fontWeight="normal" fontSize={16} />
            <Title title={TvSeries.first_air_date} color={theme.Colors.TextColor} fontWeight="normal" fontSize={16} />
            <View style={styles.GenresContainer} >
                {matchingGenres?.map((genre: ItemData) => {
                    return (
                        <Text key={genre.id} style={[styles.GenreName,{
                            color: theme.Colors.TextColor}]}><Text style={[styles.GenreIndicator,{
                                color: theme.Colors.red}]}>.</Text>{genre.name}</Text>
                    );
                })}
            </View>
            <Title title={TvSeries.origin_country.toString()} color={theme.Colors.TextColor} fontWeight="normal" fontSize={16} />
            <Title title={TvSeries.original_language} color={theme.Colors.TextColor} fontWeight="normal" fontSize={16} />
            <Title title={TvSeries.original_name} color={theme.Colors.TextColor} fontWeight="normal" fontSize={16} />
            <Title title={TvSeries.overview} color={theme.Colors.TextColor} fontWeight="normal" fontSize={16} />
            <Title title={TvSeries.popularity.toString()} color={theme.Colors.TextColor} fontWeight="normal" fontSize={16} />
            <Title title={TvSeries.vote_average.toString()} color={theme.Colors.TextColor} fontWeight="normal" fontSize={16} />
            <Title title={TvSeries.vote_count.toString()} color={theme.Colors.TextColor} fontWeight="normal" fontSize={16} />
        </ScrollView>
    );
};
export default BodyDetailsSeries;