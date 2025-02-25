import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  ImageBackground,
} from "react-native";
import { Separator } from "../components";
import { Colors, Fonts, Images } from "../contants";
import { ItemService } from "../services";
import { Display } from "../utils";

const HomeScreen = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const scrollY = new Animated.Value(0);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [80, 50],
    extrapolate: "clamp",
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      ItemService.getItems().then((response) => {
        if (response?.status) {
          setItems(response.data);
        }
      });
    });
    return unsubscribe;
  }, []);

  const renderHeader = () => (
    <Animated.View style={[styles.header, { height: headerHeight }]}>
      <View style={styles.headerContent}>
        <Text style={styles.logo}>Shopwise</Text>
        <View style={styles.headerRight}>
          <Image style={styles.profileImage} source={Images.AVATAR} />
        </View>
      </View>
    </Animated.View>
  );

  const renderHeroSection = () => (
    <View style={styles.heroSection}>
      <ImageBackground
        source={Images.SHOPWISE_BANNER}
        style={styles.heroBg}
        resizeMode="cover"
      >
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Discover Amazing Products</Text>
          <Text style={styles.heroSubtitle}>The Wise Way to Shop</Text>
        </View>
      </ImageBackground>
    </View>
  );

  const renderProductGrid = () => (
    <View style={styles.productsSection}>
      <Text style={styles.sectionTitle}>Our Products</Text>
      <View style={styles.productGrid}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.productCard}
            onPress={() => navigation.navigate("Item", { item })}
          >
            <Image
              source={{
                uri: `${process.env.EXPO_PUBLIC_BACKEND_URL}/uploads/${item.image}`,
              }}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>₹{item.price}</Text>
              <Text style={styles.productShop}>By {item.shop.shopName}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        {renderHeroSection()}
        {renderProductGrid()}
        <Separator height={20} />
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  header: {
    backgroundColor: Colors.DEFAULT_WHITE,
    elevation: 5,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: "100%",
  },
  logo: {
    fontSize: 24,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: Display.setWidth(10),
    height: Display.setWidth(10),
    borderRadius: 50,
  },
  heroSection: {
    height: 300,
  },
  heroBg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heroContent: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 20,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 32,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_WHITE,
    textAlign: "center",
  },
  heroSubtitle: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_WHITE,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_BLACK,
    marginBottom: 15,
  },
  productsSection: {
    padding: 20,
    marginBottom: 10,
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    width: "48%",
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
  productPrice: {
    fontSize: 14,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_GREEN,
    marginTop: 4,
  },
  productShop: {
    color: "gray",
    fontSize: 12,
  },
});

export default HomeScreen;
