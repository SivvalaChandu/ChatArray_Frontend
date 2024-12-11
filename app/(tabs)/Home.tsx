import { StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import data from "@/assets/chats.json";
import { defaultStyles } from "@/constants/Styles";
import { useRouter } from "expo-router";

export default function Home() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (filteredData.length > 0) {
      setFilteredData(
        filteredData.filter((item) =>
          item.from.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredData(data);
    }
  }, [search]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={search}
        onChangeText={(e) => {
          setSearch(e);
        }}
        placeholder="Search"
      />
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <Card {...item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={defaultStyles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  gesture: {
    flex: 1,
  },
  input: {
    height: 40,
    width: "95%",
    marginTop: 8,
    marginBottom: 10,
    borderRadius: 25,
    backgroundColor: "#ECEDEE",
    paddingHorizontal: 20,
    fontSize: 18,
    shadowColor: "#000",
  },
});
