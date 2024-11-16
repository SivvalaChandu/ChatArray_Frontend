import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const Home: React.FC = () => {
  return (
    // <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <View style={styles.profilecard}>
        <View style={styles.imgcontainer}>
          <Image
            source={require("../../assets/images/theman.jpeg")}
            style={styles.profileimg}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.username}>Ram Lila Rao from raja</Text>
        <Text style={styles.userid}>@useruniqueid</Text>
      </View>
      <View>
        <Text style={styles.heading}>About</Text>
        <Text style={styles.description}>
          "When you hit the point of no return, that’s the moment it truly
          becomes a journey. If you can still turn back, it’s not really a
          journey." –Hinata Miyake, A Place Further than the Universe
        </Text>
        <Text style={styles.heading}>Mail</Text>
        <Text style={styles.mail}>examplemail@gnail.com</Text>
      </View>
    </View>
    // </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  profilecard: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  imgcontainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    overflow: "hidden",
  },
  profileimg: {
    width: 110,
    height: 110,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginBottom: 8,
    marginTop: 10,
    marginHorizontal: "auto",
  },
  userid: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
    fontWeight: "600",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 25,
  },
  button: {
    backgroundColor: "rgb(80,167,253)",
    padding: 11,
    borderRadius: 5,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  buttontext: {
    fontSize: 16,
    fontWeight: "500",
  },
  heading: {
    fontSize: 18,
    fontWeight: "500",
    color: "grayblack",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "gray",
    paddingHorizontal: 15,
    lineHeight: 20,
    marginBottom: 35,
  },
  mail: {
    fontSize: 16,
    color: "gray",
    paddingHorizontal: 15,
    lineHeight: 20,
    marginBottom: 35,
  },
});
