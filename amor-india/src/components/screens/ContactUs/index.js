import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import GeneralStatusBarColor from "../../components/GeneralStatusBarColor/GeneralStatusBarColor";

class ContactUs extends Component {
  _handleCall = () => {
    const url = `tel:+919999050671`;
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        return Linking.openURL(url).catch(() => null);
      }
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <GeneralStatusBarColor
          backgroundColor="#253037"
          barStyle="light-content"
        />
        <View style={styles.header}>
          <Icon
            name="md-menu"
            size={30}
            style={styles.icon}
            onPress={() => this.props.navigation.openDrawer()}
          />
          <Image
            source={require("../../../../assets/images/amorbranding-white.jpg")}
            style={styles.background}
          ></Image>
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ width: "100%" }}>
            <Text style={{ fontSize: 25, marginTop: 50, alignSelf: "center" }}>
              Get in touch with us
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={{ marginTop: 70 }}>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: "black",
              width: "60%",
              alignSelf: "center",
            }}
          >
            <Text
              style={{ padding: 20, alignSelf: "center" }}
              onPress={() => Linking.openURL("mailto:amorapparels@gmail.com")}
            >
              Mail: amorapparels@gmail.com
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: "black",
              width: "60%",
              alignSelf: "center",
              marginTop: 50,
            }}
          >
            <Text
              style={{ padding: 20, alignSelf: "center" }}
              onPress={this._handleCall}
            >
              Phone: +919999050671
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: "black",
              width: "60%",
              alignSelf: "center",
              marginTop: 50,
            }}
          >
            <Text
              style={{ padding: 20, alignSelf: "center" }}
              onPress={() => {
                Linking.openURL("whatsapp://send?text=&phone=+919999050671");
              }}
            >
              Whatsapp: +919999050671
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
export default ContactUs;
