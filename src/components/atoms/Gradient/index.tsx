import {View} from 'react-native';
import { ReactNode } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import {styles} from './style';
import { gradientProp } from './interface/interface';
import { useTheme } from '../../../theme/theming/themeProvider';

const Gradient =({children}:gradientProp)=>{
    const theme=useTheme();
    return (
        <View style={styles.Viewcontainer}>
            <LinearGradient colors={[theme.Colors.primary100,theme.Colors.primary500]} style={styles.container}>
                {children}
            </LinearGradient>
        </View>
    )

}
export default Gradient;