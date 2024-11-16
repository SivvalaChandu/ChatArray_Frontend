import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
// import * as MediaLibrary from "expo-media-library";
import { useState, useRef, Children } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function CameraComponent() {
  const [cameraFacing, setcameraFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return (
      <View>
        <Text>Requesting camera permission.</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.askPermission}>
        <Text style={styles.mgsPermission}>
          Allow App to access your camera
        </Text>
        <Text style={styles.chngPermission}>
          You can change permission anytime by going to settings
        </Text>
        <Text style={styles.allowButton} onPress={requestPermission}>
          Allow
        </Text>
      </View>
    );
  }

  function toggleCameraFacing() {
    setcameraFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={cameraFacing}>
        <View style={styles.buttonContainer}>
          <View style={styles.bottom}>
            <Text>ImgPicker</Text>
            <View style={styles.shutter}></View>
            <MaterialIcons
              name="change-circle"
              size={45}
              color="white"
              onPress={toggleCameraFacing}
            />
          </View>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  askPermission: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  mgsPermission: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  allowButton: {
    fontSize: 20,
    color: "blue",
    paddingTop: 10,
  },
  chngPermission: {
    width: "80%",
    textAlign: "center",
    fontSize: 16,
    color: "white",
    paddingTop: 5,
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    marginBottom: 60,
    marginHorizontal: 10,
  },
  bottom: {
    width: "95%",
    flexDirection: "row",
    alignSelf: "flex-end",
    justifyContent: "space-between",
    alignItems: "center",
  },
  shutter: {
    width: 70,
    height: 70,
    borderWidth: 6,
    borderColor: "white",
    borderRadius: 50,
  },
});
