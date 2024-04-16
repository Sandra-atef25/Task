import { Text, TextInput, View } from "react-native";
import { textInputProps } from "./interface/interface";
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useTheme } from "../../../theme/theming/themeProvider";

const CustomTextInput = ({
  textLabel,
  placeholder,
  value,
  inputHandler,
  password = false,
  isInvalid = true,
  handleBlur,
}: textInputProps) => {
  const theme = useTheme();
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  return (
    <View>
      <Text
        style={[
          styles.textuser,
          {  color: theme.Colors.TextColor },
        ]}
      >
        {textLabel}
      </Text>
      <View>
        <TextInput
          style={[
            styles.texti,{ backgroundColor:theme.Colors.primary100,
              borderColor: theme.Colors.TextColor,
              color:theme.Colors.TextColor},
            isInvalid &&
              styles.inputInvalid && {
                backgroundColor: theme.Colors.error100,
                borderColor: theme.Colors.red,
              },
          ]}
          autoCapitalize="none"
          secureTextEntry={password && isPasswordSecure}
          onChangeText={inputHandler}
          value={value}
          placeholder={placeholder}
          onBlur={handleBlur}
        />
        {password && (
          <Ionicons
            name={isPasswordSecure ? "eye-off" : "eye"}
            onPress={() => {
              isPasswordSecure
                ? setIsPasswordSecure(false)
                : setIsPasswordSecure(true);
            }}
            size={24}
            color={theme.Colors.TextColor}
            style={styles.icon}
          />
        )}
      </View>
    </View>
  );
};
export default CustomTextInput;
