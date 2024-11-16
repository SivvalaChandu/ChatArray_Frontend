import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { router, Tabs, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Colors from "../../constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { BlurView } from "@react-native-community/blur";

type comp = {
  visible: boolean;
  onClose: () => void;
  // children: React.ReactNode;
};

const ModalComponent: React.FC<comp> = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <BlurView style={{ flex: 1 }} blurType="light" blurAmount={1}>
        <Pressable style={styles.overlay} onPress={onClose}>
          <View style={styles.container}>
            <Pressable
              style={styles.childs}
              onPress={() => {
                onClose();
                router.push("../screens/Search");
              }}
            >
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={25}
                color="black"
              />
              <View style={{ gap: 4 }}>
                <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                  New Chat
                </Text>
                <Text style={{ color: "gray", fontSize: 13 }}>
                  Search new Friends and Send a message
                </Text>
              </View>
            </Pressable>
            <View
              style={{
                height: 0.4,
                backgroundColor: "black",
              }}
            />
            <Pressable style={styles.childs}>
              <MaterialIcons name="group" size={25} color="black" />
              <View style={{ gap: 4 }}>
                <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                  Create Group
                </Text>
                <Text style={{ color: "gray", fontSize: 13 }}>
                  Create, chat, and collaborate in groups
                </Text>
              </View>
            </Pressable>
          </View>
          <Pressable style={styles.cancel} onPress={onClose}>
            <Text style={styles.canceltext}>Cancel</Text>
          </Pressable>
        </Pressable>
      </BlurView>
    </Modal>
  );
};

export default function TabsLayout() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <ModalComponent
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      ></ModalComponent>
      <Tabs screenOptions={{ tabBarStyle: { height: 60 } }}>
        <Tabs.Screen
          name="Home"
          options={{
            title: "Chats",
            tabBarLabelStyle: { fontSize: 13, fontWeight: "bold" },
            tabBarActiveTintColor: "black",
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="chatbubbles" size={size} color={color} />
            ),
            headerLeft: () => (
              <TouchableOpacity style={{ paddingLeft: 10 }}>
                {/* Place icon of the app here */}
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row", paddingRight: 20 }}>
                <TouchableOpacity
                  onPress={() => router.push("/screens/camera")}
                >
                  <Ionicons name="camera-outline" color={"black"} size={25} />
                </TouchableOpacity>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#fff",
            },
          }}
        />
        <Tabs.Screen
          name="NewChat"
          options={{
            tabBarIcon: () => (
              <Pressable
                style={{
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => setModalVisible(true)}
              >
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: "black",
                    width: "100%",
                    height: "80%",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 25,
                  }}
                >
                  <MaterialIcons name="add" size={20} color="white" />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "semibold",
                      color: "white",
                    }}
                  >
                    New Chat
                  </Text>
                </View>
              </Pressable>
            ),
            tabBarLabel: () => null,
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            title: "Profile",
            tabBarLabelStyle: { fontSize: 13, fontWeight: "bold" },
            tabBarActiveTintColor: "black",
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="person" size={size} color={color} />
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row", paddingRight: 20 }}>
                <TouchableOpacity>
                  <Ionicons name="share-social" size={24} color="black" />
                </TouchableOpacity>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#fff",
            },
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    // flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container: {
    width: 320,
    height: 180,
    borderWidth: 0.5,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 18,
  },
  childs: {
    flexDirection: "row",
    width: "100%",
    height: 90,
    alignItems: "center",
    paddingLeft: 20,
    gap: 14,
    backgroundColor: "white",
  },
  cancel: {
    width: "34%",
    height: 48,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginBottom: 6,
  },
  canceltext: {
    textAlign: "center",
  },
});
