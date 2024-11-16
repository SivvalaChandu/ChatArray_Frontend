import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

const InputBox = () => {
  const [text, setText] = useState("");

  const handleSendMsg = () => {
    // BackEnd logic to send msg to other user
    console.log(text);
  };

  const handleCamera = () => {
    router.push("/screens/camera");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        value={text}
        onChangeText={(e) => setText(e)}
        placeholder="Message"
        multiline={true}
      />
      <Pressable style={styles.iconContainer}>
        {text ? (
          <Ionicons
            name="send"
            size={24}
            color="white"
            onPress={handleSendMsg}
          />
        ) : (
          <Ionicons
            name="camera-outline"
            color="white"
            size={25}
            onPress={handleCamera}
          />
        )}
      </Pressable>
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  inputBox: {
    minHeight: 45,
    maxHeight: 150,
    backgroundColor: "gray",
    width: "85%",
    paddingHorizontal: 18,
    borderRadius: 25,
    fontSize: 18,
  },
  iconContainer: {
    width: "14%",
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 28,
    marginBottom: -3,
    backgroundColor: "black",
  },
});
