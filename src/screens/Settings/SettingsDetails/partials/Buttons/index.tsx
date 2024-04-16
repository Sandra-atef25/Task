import { View } from "react-native";
import PrimaryButton from "../../../../../components/atoms/PrimaryButton";

import { styles } from "./style";
import { useButtonsPressHandle } from "../../hooks/HandleButtonPressed";
import { useTheme } from "../../../../../theme/theming/themeProvider";
import { themes } from "../../../../../theme/theming/defaultTheme";
import { useEffect, useState } from "react";
import { retrieveData, saveData } from "../../../../../utils/AsyncStorage";

const Buttons = () => {
    const theme=useTheme();
    // const [Theme,setTheme]=useState(theme);
    // const getTheme=async()=>{
    //     try{const ThemeSaved=await retrieveData("theme");

    //     if (ThemeSaved) {
    //         setTheme(ThemeSaved);
    //       }

    //     } catch (error) {
    //       console.log('Error loading theme:', error);
    //     }
    // }
    // useEffect(()=>{
    //     getTheme();
         
    // },[]);
    // const toggleTheme = newTheme => {
    //     setTheme(newTheme);
    //     saveData('theme', newTheme)
    //   };
    
    // const changeTheme=()=>{
    //     if(theme===themes.default){
            
    //     }
    // }
    const { pressGoBack, pressLogOut } = useButtonsPressHandle();
    return (
        <View style={[styles.Container,{backgroundColor:theme.Colors.backgroundColor}]}>
            <PrimaryButton onPress={pressGoBack} color={theme.Colors.babyBlue} name="Back" />
            <PrimaryButton onPress={pressLogOut} color={theme.Colors.red} name="Log Out" />
            {/* <PrimaryButton onPress={()=>toggleTheme()} name="Change Theme" color="blue"/>  */}
        </View>
    );
};
export default Buttons;
