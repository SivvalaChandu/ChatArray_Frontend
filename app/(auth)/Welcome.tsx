import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const Welcome = () => {
  const handleClick = () => {
    router.push("/(auth)/sighup");
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.firstLine}>Your privacy is our priority</Text>
        <Text style={styles.midText}>
          {"           "}We believe your conversations belong to you alone,
          which is why your messages, calls, and media are{" "}
          <Text style={{ color: "gold" }}> never stored on our servers.</Text>{" "}
          Only you and those you communicate with can access your data.
        </Text>
        <Text style={[styles.lastLine, { fontSize: 16, marginTop: 50 }]}>
          {"\u2B24 "} privacy is protected from the moment you join.
        </Text>
        <Text style={styles.lastLine}>
          {"\u2B24 "} all securely stored on your devices
        </Text>
      </View>

      <Pressable style={styles.button} onPress={handleClick}>
        <Text style={styles.btnText}>Welcome</Text>
      </Pressable>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
  },

  firstLine: {
    color: "gold",
    marginTop: 100,
    marginLeft: 15,
    fontSize: 24,
    fontWeight: "bold",
  },
  midText: {
    color: "white",
    marginTop: 50,
    marginHorizontal: 15,
    lineHeight: 25,
    fontSize: 18,
    alignSelf: "flex-end",
  },
  lastLine: {
    color: "gold",
    marginTop: 10,
    marginRight: 15,
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  button: {
    width: "80%",
    height: 50,
    marginBottom: 40,
    backgroundColor: "white",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});
