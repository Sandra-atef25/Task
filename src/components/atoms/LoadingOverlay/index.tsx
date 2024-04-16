import { View, ActivityIndicator,Text } from 'react-native';
import { styles } from './style';
import { loadingOverLayProp } from './interface/interface';
import { useTheme } from '../../../theme/theming/themeProvider';

const LoadingOverlay = ({message}:loadingOverLayProp) => {
    const theme=useTheme();
    return (
        <View style={styles.container}>
            <Text style={[styles.message,{color:theme.Colors.TextColor}]}>{message}</Text>
            <ActivityIndicator size="large" color={theme.Colors.red} />
        </View>
    );
}
export default LoadingOverlay;