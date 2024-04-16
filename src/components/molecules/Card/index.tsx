import { TouchableOpacity, View, Text } from 'react-native';
import CustomImage from '../../atoms/CustomImage';
import Title from '../../atoms/Title';
import { cardProps } from './interface/interface';
import { styles } from './style';
import { useTheme } from '../../../theme/theming/themeProvider';

const Card = ({ title, posterPath, onPress }:cardProps ) => {
    const theme=useTheme();
    return (
        <TouchableOpacity onPress={onPress} style={styles.ViewContainer}>
            <View style={[styles.CardContainer,{
        backgroundColor:theme.Colors.gray}]}>
                <CustomImage source={posterPath}/>
                <Title title={title} color={theme.Colors.backgroundColor} fontSize={16} fontWeight="normal"/>
            </View>
        </TouchableOpacity>
    );
};
export default Card;
