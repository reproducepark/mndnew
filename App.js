import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";

const BackGroundImage = require("./assets/images/img_bg_mymnd.png");
const CameraImg = require("./assets/images/img_policy_state_camera_block.png");

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BackGroundImage}
        resizeMode="contain"
        style={{ flex: 1 }}>
        <View style={styles.overlay}>
          <Image
            source={CameraImg}
            style={styles.camera}>
          </Image>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
  overlay: {
    flexDirection: 'row', // 수평 방향으로 정렬하기 위해 설정
    justifyContent: 'center', // 수평 중앙 정렬
    alignItems: 'center', // 수직 중앙 정렬
    position: 'absolute', // overlay를 위치시킬 때 절대 위치로 설정
    bottom: 250, // 아래로 20만큼 떨어지도록 설정
    left: 0, // 왼쪽 정렬
    right: 0, // 오른쪽 정렬
  },
  camera: {
    // position: 'absolute', // overlay를 위치시킬 때 절대 위치로 설정
    // bottom: 150, // 아래로 20만큼 떨어지도록 설정
    width: 200, // 이미지의 너비
    height: 200, // 이미지의 높이
    borderRadius: 100, // 원형 모양을 위한 반지름
    resizeMode: 'cover', // 이미지를 cover로 설정하여 비율 유지
  },

});
