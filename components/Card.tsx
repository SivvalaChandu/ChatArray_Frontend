import { StyleSheet, Image, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";

type CardProps = {
  id: string;
  from: string;
  date: string;
  img: string;
  msg: string;
  read: boolean;
  unreadCount: number;
};

const Card: React.FC<CardProps> = ({
  id,
  from,
  date,
  img,
  msg,
  read,
  unreadCount,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/screens/${date}`);
  };
  return (
    <Pressable style={[styles.container]} onPress={handleClick}>
      <View>
        <Image source={{ uri: `${img}` }} style={styles.img} />
      </View>
      <View style={styles.usernameAndMsg}>
        <Text style={styles.username} numberOfLines={1}>
          {from}
        </Text>
        <Text style={styles.message} numberOfLines={1}>
          {msg}
        </Text>
      </View>
      <View style={styles.timeAndunread}>
        <Text style={styles.time} numberOfLines={1}>
          {date}
        </Text>
        <View style={styles.unread}>
          <Text style={styles.count} numberOfLines={1}>
            {unreadCount}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 12,
    paddingEnd: 18,
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 2,
  },
  link: {
    flexDirection: "row",
    width: "100%",
    padding: 12,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  usernameAndMsg: {
    width: "68%",
    paddingLeft: 10,
    marginTop: -4,
  },
  username: {
    color: "black",
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 2,
  },
  message: {
    color: "gray",
    fontSize: 14,
  },
  timeAndunread: {
    width: 68,
    height: 42,
    marginTop: -6,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  time: {
    color: "gray",
  },
  unread: {
    backgroundColor: "gold",
    paddingHorizontal: 6,
    paddingVertical: 0.3,
    borderRadius: 15,
    marginEnd: 4,
  },
  count: {
    fontSize: 13,
    fontWeight: "500",
  },
});
