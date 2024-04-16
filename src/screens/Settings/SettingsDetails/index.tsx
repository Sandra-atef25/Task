import { View,Text } from "react-native";
import Buttons from "./partials/Buttons";
import { withTheme } from "../../../theme/theming/themeProvider";
const SettingsDetails = ({theme}) => {
  return (
    <View style={{flex:1,backgroundColor:theme.Colors.gray}}>
    <Text >
      the theme provided
    </Text>
    <Buttons/>
    </View>
  );
};
export default withTheme(SettingsDetails);
