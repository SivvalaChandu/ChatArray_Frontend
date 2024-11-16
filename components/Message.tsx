import { StyleSheet, Text, View } from "react-native";
import React from "react";

type props = {
  message: {
    id: string;
    from: Number;
    date: string;
    msg: string;
  };
};

const Message: React.FC<props> = ({ message }) => {
  const msgFrom = message.from === 1;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: msgFrom ? "lightblue" : "white",
          alignSelf: msgFrom ? "flex-end" : "flex-start",
        },
      ]}
    >
      <Text>{message.msg}</Text>
      {/* <Text>{message.date}</Text> */}
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
    marginBottom: 10,
  },
});
