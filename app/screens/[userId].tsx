import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Message from "../../components/Message";
import InputBox from "../../components/InputBox";
import messages from "../../assets/messages.json";

export default function chatscreen() {
  const router = useRouter();
  const { userId } = useLocalSearchParams();

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
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        style={{}}
        inverted
      />

      <InputBox />
    </View>
  );
}

const styles = StyleSheet.create({});
