import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const sighup = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.firstLine}>Your data, your control.</Text>
        <Text style={styles.midText}>
          {"           "}Every message and call is stored on your device only.
          Our mission is to offer privacy-first communication, giving you peace
          of mind from your very first message.
        </Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => console.log("login logic")}
      >
        <Text style={styles.btnText}>Welcome</Text>
      </Pressable>
    </View>
  );
};

export default sighup;

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
