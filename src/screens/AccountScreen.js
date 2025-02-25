import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Colors, Fonts, Images } from "../contants";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Display } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { StorageService } from "../services";
import { GeneralAction } from "../actions";

const AccountScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.generalState.userData.data);

  const logout = () => {
    StorageService.setToken("").then(() => {
      dispatch(GeneralAction.setToken(""));
      dispatch(GeneralAction.setUserData(null));
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundCurvedContainer} />
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={20}
          color={Colors.DEFAULT_WHITE}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}>Account</Text>
      </View>
      <View style={styles.profileHeaderContainer}>
        <View style={styles.profileImageContainer}>
          <Image style={styles.profileImage} source={Images.AVATAR} />
        </View>
        <View style={styles.profileTextContainer}>
          <Text style={styles.nameText}>{user.username}</Text>
          <Text style={styles.emailText}>{user.email}</Text>
        </View>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} activeOpacity={0.8}>
          <View style={styles.menuIcon}>
            <MaterialCommunityIcons
              name="truck-fast-outline"
              size={18}
              color={Colors.DEFAULT_GREEN}
            />
          </View>
          <Text style={styles.menuText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} activeOpacity={0.8}>
          <View
            style={{ ...styles.menuIcon, backgroundColor: Colors.LIGHT_RED }}
          >
            <MaterialCommunityIcons
              name="gift-outline"
              size={18}
              color={Colors.SECONDARY_RED}
            />
          </View>
          <Text style={styles.menuText}>Offers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} activeOpacity={0.8}>
          <View
            style={{ ...styles.menuIcon, backgroundColor: Colors.LIGHT_YELLOW }}
          >
            <Ionicons
              name="location-outline"
              size={18}
              color={Colors.DEFAULT_YELLOW}
            />
          </View>
          <Text style={styles.menuText}>Addresses</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.sectionContainer}>
          <TouchableOpacity
            style={styles.sectionTextContainer}
            activeOpacity={0.8}
            onPress={() => logout()}
          >
            <MaterialCommunityIcons
              name="logout"
              size={18}
              color={Colors.DEFAULT_GREEN}
            />
            <Text style={styles.sectionText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SECONDARY_WHITE,
  },
  backgroundCurvedContainer: {
    backgroundColor: Colors.DEFAULT_GREEN,
    height: 2000,
    position: "absolute",
    top: -1 * (2000 - 230),
    width: 2000,
    borderRadius: 2000,
    alignSelf: "center",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    color: Colors.DEFAULT_WHITE,
    marginLeft: 10,
  },
  profileHeaderContainer: {
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  profileImageContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    padding: 1,
    elevation: 3,
  },
  profileImage: {
    width: Display.setWidth(15),
    height: Display.setWidth(15),
    borderRadius: 32,
  },
  profileTextContainer: {
    marginLeft: 10,
  },
  nameText: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 14 * 1.4,
    color: Colors.DEFAULT_WHITE,
  },
  emailText: {
    fontSize: 11,
    fontFamily: Fonts.POPPINS_REGULAR,
    lineHeight: 10 * 1.4,
    color: Colors.DEFAULT_WHITE,
  },
  menuContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  menuItem: {
    flex: 1,
    alignItems: "center",
  },
  menuIcon: {
    backgroundColor: Colors.LIGHT_GREEN,
    height: Display.setWidth(8),
    width: Display.setWidth(8),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
  },
  menuText: {
    fontSize: 12,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    lineHeight: 12 * 1.4,
    color: Colors.DEFAULT_BLACK,
    textAlign: "center",
    marginTop: 5,
  },
  mainContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
    elevation: 3,
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 20,
  },
  sectionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionText: {
    fontSize: 13,
    fontFamily: Fonts.POPPINS_REGULAR,
    lineHeight: 13 * 1.4,
    color: Colors.INACTIVE_GREY,
    marginLeft: 10,
  },
});

export default AccountScreen;
