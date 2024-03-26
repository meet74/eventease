import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Colors } from "../../../constant/Colors";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { ScreenNames } from "../../../constant/ScreenNames";
import {auth} from '../../../config/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'



const { width, height } = Dimensions.get("screen");

const SignUpScreen = ({ navigation }) => {

  const [value, setValue] = React.useState({
    email: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    error: "",
  });

  const handleSignUp = async () => {
    // Check if any field is empty
    
    if (
      value.fullName === '' ||
      value.email === ''||
      value.password === '' ||
      value.confirmPassword === ''
    ) {
      console.log(value);
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    // Check if password matches confirm password
    if (value.password !== value.confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.replace(ScreenNames.signIn);
    } catch (error) {
      let errorMessage = "";
      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "Email already in use.";
          break;
        case "auth/weak-password":
          errorMessage = "Password should be at least 6 characters.";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address.";
          break;
        default:
          errorMessage = "An error occurred. Please try again later.";
      }
      setValue({
        ...value,
        error: errorMessage,
      });
    }

  };

  return (
    <View style={styles.safeareaview}>
      <SafeAreaView />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            source={require("../../../../assets/images/logo.png")}
            style={styles.logoImg}
          />
          <Text style={styles.logoTxt}>EventEase</Text>
        </View>

        <View style={styles.signinContainer}>
          <Text style={styles.signinText}>Sign up</Text>

          {!!value.error && <View style={styles.error}><Text style = {styles.errorText}>{value.error}</Text></View>}
          
          <View style={styles.inputDecoration}>
            <FontAwesome5 name="user-alt" size={20} color="gray" />
            <TextInput
              placeholder="Full name"
              style={styles.inputText}
              onChangeText={(em) => setValue({ ...value, fullName: em })}
            />
          </View>

          <View style={styles.inputDecoration}>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="gray"
            />
            <TextInput
              placeholder="abc@email.com"
              style={styles.inputText}
              onChangeText={(em) => setValue({ ...value, email: em })}
            />
          </View>

          <View style={styles.inputDecoration}>
            <MaterialIcons name="lock-outline" size={24} color="gray" />
            <TextInput
              secureTextEntry={true}
              placeholder="Your password"
              style={styles.inputText}
              onChangeText={(em) => setValue({ ...value, password: em })}
            />
          </View>

          <View style={styles.inputDecoration}>
            <MaterialIcons name="lock-outline" size={24} color="gray" />
            <TextInput
              secureTextEntry={true}
              placeholder="Confirm password"
              style={styles.inputText}
              onChangeText={(em) => setValue({ ...value, confirmPassword: em })}
            />
          </View>

          <TouchableOpacity onPress={handleSignUp}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Sign up</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.orTextContainer}>
            <Text style={styles.orText}>OR</Text>
          </View>
        </View>

        <TouchableOpacity>
          <View style={styles.googleButtonContainer}>
            <Image
              source={require("../../../../assets/images/google-logo.png")}
              style={styles.googleLogo}
            />
            <Text style={styles.googleButtonText}>SignUp with Google</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.alreadyTextContainer}>
          <Text style={styles.alreadyText}>Already have an Account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(ScreenNames.signIn)}
          >
            <Text style={styles.signUpText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeareaview: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  logoImg: {
    height: 150,
    width: 200,
    resizeMode: "contain",
  },
  logoTxt: {
    fontFamily: "Actor-Regular",
    fontSize: 35,
    color: Colors.primaryColor,
    letterSpacing: 1,
  },
  inputDecoration: {
    borderWidth: 1,
    margin: 10,
    borderColor: Colors.borderColor,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
  },
  inputText: {
    padding: 10,
    flex: 1,
  },
  googleButtonContainer: {
    width: width * 0.8,
    height: 50,
    backgroundColor: "white",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
  },
  googleLogo: {
    height: 30,
    width: 30,
    marginHorizontal: 15,
  },
  googleButtonText: {
    fontSize: 15,
  },
  signinText: {
    fontFamily: "Actor-Regular",
    fontSize: 24,
    color: Colors.primaryColor,
    letterSpacing: 1,
    margin: 5,
    marginLeft: 20,
    marginBottom: 10,
  },
  signinContainer: {
    padding: 20,
    marginTop: 5,
  },
  buttonContainer: {
    width: width * 0.8,
    height: 50,
    alignSelf: "center",
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  orTextContainer: {
    alignItems: "center",
  },
  orText: {
    fontSize: 18,
    color: "gray",
    fontWeight: "400",
  },
  alreadyText: {
    marginHorizontal: 10,
  },

  signUpText: {
    color: Colors.primaryColor,
    fontWeight: "bold",
  },
  alreadyTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 25,
  },
  error: {
    marginTop: 10,
    padding: 10,
    
    
  },
  errorText:{
    color:"red"
  }
});

export default SignUpScreen;
