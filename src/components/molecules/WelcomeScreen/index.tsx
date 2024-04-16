import { View } from "react-native";
import Title from "../../atoms/Title";
import { styles } from "./style";
import { welcomeScreenProp } from "./interface/interface";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/redux/store";
import { useTheme } from "../../../theme/theming/themeProvider";

const Welcome = ({ children }:welcomeScreenProp ) => {
    const theme=useTheme();
    const user=useSelector((state:RootState)=>state.username.userName);
    const welcome ="Welcome "+user;
    return (
       
        <View style={[styles.container,{backgroundColor:theme.Colors.backgroundColor}]}>
            <Title color={theme.Colors.red} fontWeight="normal" fontSize={30} title={welcome} />
            <View>{children}</View>
        </View>
    );
};
export default Welcome;