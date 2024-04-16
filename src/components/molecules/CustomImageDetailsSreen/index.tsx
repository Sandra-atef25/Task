import { View, ImageBackground } from 'react-native';
import IconButton from '../../atoms/IconButton';
import Title from '../../atoms/Title';
import { customImageProps } from './interface/interface';
import { styles } from './style';
import { useTheme } from '../../../theme/theming/themeProvider';

const Image = ({ posterPath, pressHandle, dataIsFavorite, heartButtonPressHandler }:customImageProps) => {
    const theme=useTheme();
    return (
        <View style={styles.Container}>
            <ImageBackground source={{ uri: posterPath }} style={styles.image}>
                <View style={styles.headerContainer}>
                    <IconButton color={theme.Colors.backgroundColor} onPress={pressHandle} icon="arrow-back"/>
                    <Title title="Details" color={theme.Colors.backgroundColor} fontSize={20} fontWeight="bold" />
                    <IconButton
                        icon={dataIsFavorite ? "heart" : "heart-outline"}
                        color={dataIsFavorite ? theme.Colors.red : theme.Colors.backgroundColor}
                        onPress={heartButtonPressHandler}
                    />
                </View>
            </ImageBackground>
        </View>
    );
};
export default Image;

