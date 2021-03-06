import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  Dimensions,
  Platform,
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import Icon from "react-native-vector-icons/FontAwesome";
import { normalize } from "react-native-elements";
import HomeStack from "./HomeStack";
import AboutUs from "../../../screens/AboutUs";
import ContactUs from "../../../screens/ContactUs";
import Feedback from "../../../screens/Feedback";
import OrderStack from "../OrderStack";

const width = Dimensions.get("window").width;

const SideDrawer = createDrawerNavigator(
  {
    Home: { screen: HomeStack },
    "My Orders": { screen: OrderStack },
    Feedback: { screen: Feedback },
    "About Amor": { screen: AboutUs },
    "Contact Us": { screen: ContactUs },
    "Terms and Conditions": { screen: OrderStack },
  },
  {
    drawerType: "slide",
    navigationOptions: ({ navigation }) => {
      drawerIcon: ({ tintColor }) => <Icon name="md-menu" size={30} />;
    },
    contentComponent: (props) => (
      <SafeAreaView
        style={{
          alignItems: "center",
          marginTop: Platform.OS === "android" ? 30 : 0,
          flex: 1,
        }}
      >
        <View
          style={{
            height: 140,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Image
            source={require("../../../../../assets/images/amorbranding-white.jpg")}
            style={{ resizeMode: "cover", height: 140, width: "100%" }}
          ></Image>
        </View>
        <ScrollView style={{ width: width / 2 + width / 5.5 }}>
          <DrawerItems
            style={{ alignItems: "left", justifyContent: "left" }}
            {...props}
            labelStyle={{ fontSize: normalize(13), fontWeight: "300" }}
          />
          <View style={{ alignSelf: "center", marginTop: 150 }}>
            <Text>App Version 1.0</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    ),
  }
);

export default createAppContainer(SideDrawer);
