import { Formik } from "formik";
import {
  ScrollView,
  Text,
  View,
} from "react-native";
import { styles } from "./style";
import { handleSignUpschema } from "../../hooks/handleSignupHookSchema";
import Gradient from "../../../../../components/atoms/Gradient";
import PrimaryButton from "../../../../../components/atoms/PrimaryButton";

import CustomTextInput from "../../../../../components/atoms/CustomTextInput";
import { useTheme } from "../../../../../theme/theming/themeProvider";
import { useNavigation } from "@react-navigation/native";
import { AuthenticationStackNavigation } from "../../../../../navigationcontainer/stacks/authenticationstack";


const SignUpForm = ({  onAuthenticate }) => {
  const { signUpSchema, handleSignUpButton } = handleSignUpschema({
    onAuthenticate,
  });
  
  const navigation=useNavigation<AuthenticationStackNavigation>();
  const theme=useTheme();
  return (
    <Gradient>
      <Formik
        initialValues={{
          userName: "",
          email: "",
          password: "",
          ConfirmPassword: "",
        }}
        onSubmit={(values) =>
          handleSignUpButton(values.email, values.password,values.userName)
        }
        validationSchema={signUpSchema}
      >
        {({
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
          touched,
        }) => (
          <>
            {/* <KeyboardAvoidingView> */}

            <ScrollView automaticallyAdjustKeyboardInsets={true}>
              <View style={styles.container}>
                <CustomTextInput
                  inputHandler={handleChange("userName")}
                  placeholder="Please Enter Your UserName"
                  textLabel="Username: "
                  value={values.userName}
                  isInvalid={errors.userName && touched.userName ? true : false}
                  handleBlur={handleBlur('userName')}
                />

                {errors.userName && touched.userName && (
                  <Text style={[styles.error,,{
                    color:theme.Colors.red}]}>{errors.userName}</Text>
                )}
              </View>
              <View style={styles.container}>
                <CustomTextInput
                  inputHandler={handleChange("email")}
                  placeholder="Please Enter Your Email"
                  textLabel="Email: "
                  value={values.email}
                  isInvalid={errors.email && touched.email ? true : false}
                  handleBlur={handleBlur('email')}
                />
                {errors.email && touched.email && (
                  <Text style={[styles.error,,{
                    color:theme.Colors.red}]}>{errors.email}</Text>
                )}
              </View>
              <View style={styles.container}>
              <CustomTextInput
                  inputHandler={handleChange("password")}
                  placeholder="Please Enter Your Password"
                  textLabel="Password: "
                  value={values.password}
                  isInvalid={errors.password && touched.password ? true : false}
                  handleBlur={handleBlur('password')}
                  password={true}
                  
                />
                {errors.password && touched.password && (
                  <Text style={[styles.error,{
                    color:theme.Colors.red}]}>{errors.password}</Text>
                )}
              </View>
              <View style={styles.container}>
              <CustomTextInput
                  inputHandler={handleChange("ConfirmPassword")}
                  placeholder="Please Confirm your Password"
                  textLabel="Confirm Password: "
                  value={values.ConfirmPassword}
                  isInvalid={errors.ConfirmPassword && touched.ConfirmPassword ? true : false}
                  handleBlur={handleBlur('ConfirmPassword')}
                  password={true}
                  
                />
                {errors.ConfirmPassword && touched.ConfirmPassword && (
                  <Text style={[styles.error,{
                    color:theme.Colors.red}]}>{errors.ConfirmPassword}</Text>
                )}
              </View>
              <View style={styles.innercon}>
                <PrimaryButton
                  disabled={!isValid}
                  color={theme.Colors.green}
                  name="Register"
                  onPress={() => {
                    handleSubmit();
                  }}
                />

                <PrimaryButton
                  color={theme.Colors.red}
                  name="Login"
                  onPress={() => navigation.navigate("Login")}
                />
              </View>
            </ScrollView>

            {/* </KeyboardAvoidingView> */}
          </>
        )}
      </Formik>
    </Gradient>
  );
};
export default SignUpForm;
