import PrimaryButton from "../../../../../components/atoms/PrimaryButton";
import Welcome from "../../../../../components/molecules/WelcomeScreen";
import { useTheme } from "../../../../../theme/theming/themeProvider";

import { useButtonPressHandle } from "../../hooks/HandleButtonPress";
const SettingsView = () => {
  const theme=useTheme();
    const {onPressHandle}=useButtonPressHandle()
  return (

    <Welcome>
      <PrimaryButton name="Settings Details" onPress={onPressHandle} color={theme.Colors.red} />
    </Welcome>
  );
};
export default SettingsView;
