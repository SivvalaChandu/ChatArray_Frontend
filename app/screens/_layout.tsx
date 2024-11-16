import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function screensLayout() {
  const router = useRouter();

  const crossHandle = () => {
    router.back();
  };

  return (
    <Stack>
      <Stack.Screen
        name="camera"
        options={{
          title: "",
          headerTransparent: true,
          headerLeft: () => (
            <MaterialIcons
              name="highlight-off"
              size={40}
              color="#00000080"
              style={{ marginLeft: 8, marginTop: 10 }}
              onPress={crossHandle}
            />
          ),
        }}
      />
      <Stack.Screen name="[userId]" />
      <Stack.Screen
        name="Search"
        options={{
          title: "New Chat",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({});
