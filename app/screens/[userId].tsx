import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Message from "../../components/Message";
import InputBox from "../../components/InputBox";
import { messages } from "@/assets/messages";

type Messages = {
  id: string;
  from: number;
  date: string;
  msg: string;
};

export default function chatscreen() {
  const router = useRouter();
  const { userId } = useLocalSearchParams();

  var [msg, AddMsg] = useState<Messages[]>(messages);

  console.log(msg);
  useEffect(() => {
    console.log(msg);

    AddMsg([
      {
        id: "6139e7c6580e998yhtb39d1ersec6bd79",
        from: 1,
        date: "Wed Aug 25 2021 04:34:39 GMT+0200 (Central European Summer Time)",
        msg: "Newly added message.",
      },
      ...msg,
    ]);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: "",
          headerLeft: () => (
            <View style={{ flexDirection: "row", gap: 20, marginStart: -5 }}>
              <MaterialIcons
                name="arrow-back"
                size={28}
                color="black"
                onPress={() => router.back()}
              />
              <Text>Pic</Text>
              <Text>UserName</Text>
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 20 }}>
              <Ionicons name="videocam-outline" size={25} color="gray" />
              <MaterialIcons name="phone" size={22} color="gray" />
            </View>
          ),
        }}
      />
      <FlatList
        data={msg}
        renderItem={({ item }) => <Message message={item} />}
        style={{}}
        inverted
      />

      <InputBox />
    </View>
  );
}

const styles = StyleSheet.create({});
