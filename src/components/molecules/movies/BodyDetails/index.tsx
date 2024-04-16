import { ScrollView, View, Text } from 'react-native';
import Title from '../../../atoms/Title';
import { ItemData } from '../../../../models/Genres';
import { styles } from './style';
import { movieDetailsProps } from './interface/interface';
import { useTheme } from '../../../../theme/theming/themeProvider';

const BodyDetails = ({ Movie, matchingGenres }:movieDetailsProps) => {
    const theme=useTheme();
    return (
        <ScrollView>
            <Title title={Movie?.title} color={theme.Colors.TextColor} fontSize={20} fontWeight="bold"/>
            <Title title={Movie?.id.toString()} color={theme.Colors.TextColor} fontSize={16} fontWeight="normal" />
            <Title title={Movie?.adult.valueOf() ? "Adult: True" : "Adult: False"} color={theme.Colors.TextColor} fontSize={16} fontWeight="normal"/>
            <Title title={Movie?.backdrop_path} color={theme.Colors.TextColor} fontSize={16} fontWeight="normal"/>
            <View style={styles.GenresContainer} >
                {matchingGenres?.map((genre: ItemData) => {
                    return (
                            <Text key={genre.id} style={[styles.GenreName,{
                                color: theme.Colors.TextColor}]}><Text style={[styles.GenreIndicator,{
                                    color: theme.Colors.red}]}>.</Text>{genre.name}</Text>
                        );
                })}
            </View>
            <Title title={Movie?.original_language} color={theme.Colors.TextColor} fontSize={16} fontWeight="normal"/>
            <Title title={Movie?.original_title} color={theme.Colors.TextColor} fontSize={16} fontWeight="normal" />
            <Title title={Movie?.overview} color={theme.Colors.TextColor} fontSize={16} fontWeight="normal"/>
            <Title title={Movie?.popularity.toString()} color={theme.Colors.TextColor} fontSize={16} fontWeight="normal" />
            <Title title={Movie?.vote_average.toString()} color={theme.Colors.TextColor} fontSize={16} fontWeight="normal" />
            <Title title={Movie?.vote_count.toString()} color={theme.Colors.TextColor} fontSize={16} fontWeight="normal" />
            <Title title={Movie?.video.valueOf() ? "Video: True" : "Video: False"} color={theme.Colors.TextColor} fontSize={16} fontWeight="normal"/>
        </ScrollView>
    );
};
export default BodyDetails;
