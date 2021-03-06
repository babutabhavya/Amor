import { StyleSheet, Dimensions, Platform } from "react-native";
const width = Dimensions.get("window").width;
import { normalize } from "../../../../helper";
import defaultStyles from "../../../../styles";

export default StyleSheet.create({
  background: {
    height: null,
    width: width * 2.0,
    resizeMode: "cover",
    overflow: "hidden",
    flex: 2.5,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000000",
  },
  logo: {
    width: 150,
    height: 150,
  },
  inputView: { marginTop: Platform.OS === "android" ? 30 : 30 },
  inputViewKeyBoard: {
    marginTop: Platform.OS === "android" ? 30 : 30,
    flex: 4,
  },
  email: {
    backgroundColor: "white",
    width: width * 0.8,
    padding: Platform.OS === "android" ? 8 : 15,
    borderWidth: 0.5,
    marginBottom: 20,
    borderRadius: 5,
    fontFamily: "AvenirNext-Medium",
    fontSize: normalize(10),
  },
  password: {
    backgroundColor: "white",
    width: width * 0.8,
    padding: Platform.OS === "android" ? 8 : 15,
    borderWidth: 0.5,
    borderRadius: 5,
    // opacity:0.3,
    fontFamily: "AvenirNext-Medium",
    fontSize: normalize(10),
  },
  buttons: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  // signup: {
  //   flex: 1,
  //   justifyContent: "space-between",
  //   alignItems: "center"
  // },
  loginButton: {
    width: width * 0.6,
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 5,
    borderColor: "#ffffff",
    borderWidth: 2,
  },
  loginButtonText: {
    textAlign: "center",
    fontSize: normalize(15),
    color: "#ffffff",
  },
  forgotPasswordButton: {
    marginTop: 20,
    marginBottom: 25,
  },
  forgotPasswordButtonText: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: normalize(15),
    fontFamily: "AvenirNext-Medium",
    fontWeight: "300",
  },
  newAccountButton: {
    width: width * 0.6,
    backgroundColor: "#000000",
    // padding: 10,
    marginTop: 30,
  },
  newAccountButtonText: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: normalize(15),
    textDecorationColor: "white",
  },
  mainText: defaultStyles.mainText,
  mainTextContainer: defaultStyles.mainTextContainer,
  mainTextContainerMargin: defaultStyles.mainTextContainerMargin,
  mainTextContainerMarginKeyBoard: {
    marginTop: Platform.OS === "android" ? 40 : 30,
    flex: Platform.OS === "android" ? 0.8 : 0.5,
  },
});
