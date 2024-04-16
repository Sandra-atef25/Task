import { useNavigation } from "@react-navigation/native";
import { SettingsStackNavigation } from "../../../../navigationcontainer/stacks/mediastack/SettingsStack";
import { AuthenticationStackNavigation } from "../../../../navigationcontainer/stacks/authenticationstack";
import { AuthContext } from "../../../../store/AuthContext/authContext";
import { useContext } from "react";
export const useButtonsPressHandle = () => {
  const nav = useNavigation<AuthenticationStackNavigation>();
  const navigation = useNavigation<SettingsStackNavigation>();
  const authctx=useContext(AuthContext);
  const pressLogOut = () => {
    authctx.logout();
    //nav.navigate("Login");
  };
  const pressGoBack = () => {
    navigation.goBack();
  };
  return {
    pressLogOut,
    pressGoBack
  };
};
