import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="(auth)" /> */}
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="screens" />
    </Stack>
  );
}

const styles = StyleSheet.create({});
