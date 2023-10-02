import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Dimensions,
  Platform,
} from "react-native";
import { carouselStyle } from "./style/ComponentStyle";
import { StackActions } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Carousel = ({ navigation }: any) => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  // const removeAllAsyncStorageItem = async () => {
  //   await AsyncStorage.clear();
  // };

  useEffect(() => {
    // removeAllAsyncStorageItem();
    let interval = setInterval(() => {
      if (activeIndex === carouselData.length - 1) {
        flatListRef.current?.scrollToIndex({
          index: 0,
          animated: true,
        });
      } else {
        flatListRef.current?.scrollToIndex({
          index: activeIndex + 1,
          animated: true,
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  });

  const [loaded] = useFonts({
    "RobotoCondensed-Regular": require("../../assets/fonts/RobotoCondensed-Regular.ttf"),
    "RobotoCondensed-Bold": require("../../assets/fonts/RobotoCondensed-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  // const getItemLayout = ({ data, index }: any) => ({
  //   length: screenWidth,
  //   offset: 334,
  //   index: 2,
  // });

  const carouselData = [
    {
      id: "01",
      image: require("../../assets/carousel/slide5.webp"),
      text: "Never a support of data loss...",
    },
    {
      id: "02",
      image: require("../../assets/carousel/slide4.jpg"),
      text: "Never miss a day with NOTEE...",
    },
    {
      id: "03",
      image: require("../../assets/carousel/slide6.jpg"),
      text: "Have a great time using the app and rate us well...",
    },
  ];

  const clickMe = () => {
    navigation.dispatch(StackActions.replace("Login", {}));
  };

  const renderItem = ({ item, index }: any) => {
    return (
      <View>
        <ImageBackground
          blurRadius={2}
          source={item.image}
          style={{
            height: screenHeight / 1.5,
            width: screenWidth,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text
            style={{
              color: "white",
              fontFamily:
                Platform.OS === "ios"
                  ? "RobotoCondensed-Bold"
                  : "RobotoCondensed-Bold",
              fontSize: Platform.OS === "android" ? 30 : 45,
            }}>
            {item.text}
            {/* Press continue to start using. */}
          </Text>
        </ImageBackground>
      </View>
    );
  };

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;

    const index = scrollPosition / screenWidth;
    setActiveIndex(index);
  };

  const renderDotIndicators = () => {
    return carouselData.map((dot, index): any => {
      if (activeIndex === index) {
        return (
          <View
            key={index}
            style={{
              backgroundColor: "purple",
              height: 10,
              width: 10,
              borderRadius: 5,
            }}></View>
        );
      } else {
        return (
          <View
            key={index}
            style={{
              backgroundColor: "gray",
              height: 10,
              width: 10,
              borderRadius: 5,
            }}></View>
        );
      }
    });
  };

  return (
    <View style={carouselStyle.container}>
      <View style={carouselStyle.imageFlatListView}>
        <FlatList
          data={carouselData}
          ref={flatListRef}
          // getItemLayout={getItemLayout}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          horizontal={true}
          pagingEnabled={true}
          onScroll={handleScroll}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={carouselStyle.carouselDotIndicators}>
        {renderDotIndicators()}
      </View>

      <View style={carouselStyle.buttonView}>
        <TouchableOpacity onPress={clickMe} style={carouselStyle.button}>
          <Text style={[carouselStyle.buttonText, {}]}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Carousel;
