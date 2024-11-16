import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const search = () => {
  const [search, setSearch] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    dataFetcher();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [search]);

  const dataFetcher = () => {
    if (timerRef.current) {
      // console.log(search);

      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      console.log(search); // This will execute after the delay
      // Here you can call your API instead of console.log
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={search}
        onChangeText={(e) => {
          setSearch(e);
        }}
        placeholder="Search users..."
      />
      {!search && (
        <>
          <View style={styles.notsearch}>
            <Ionicons
              name="search"
              size={60}
              color="gray"
              style={{ opacity: 0.5 }}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "gray",
                marginTop: 10,
                opacity: 0.7,
              }}
            >
              Ready to discover new connections?
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                color: "gray",
                opacity: 0.5,
              }}
            >
              Start typing to find people to connect with.
            </Text>
          </View>
        </>
      )}
      {/*fetch the user from the back and find the users */}
    </View>
  );
};

export default search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  input: {
    height: 40,
    width: "95%",
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 25,
    backgroundColor: "#ECEDEE",
    paddingHorizontal: 20,
    fontSize: 18,
    shadowColor: "#000",
  },
  notsearch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 150,
  },
});
