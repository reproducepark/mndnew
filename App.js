import React, { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, View, Animated, Easing } from "react-native";

const BackGroundImage = require("./assets/images/img_bg_mymnd.png");
const CameraImg = require("./assets/images/img_policy_state_camera_block.png");
const CircleImg = require("./assets/images/circle_image.png");
export default function App() {
  const [rotationDegree, setRotationDegree] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationDegree((prevDegree) => (prevDegree + 20) % 360);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const circleRotationStyle = {
    transform: [{ rotate: `${rotationDegree}deg` }],
  };

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
          <Animated.Image
            source={CircleImg}
            style={[styles.circle, circleRotationStyle]}>
          </Animated.Image>
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
    position: 'absolute',
    top: '50%', // 배경 이미지의 상단에서 중앙으로 이동
    left: '50%', // 배경 이미지의 왼쪽에서 중앙으로 이동
  },
  camera: {
    width: 185, // 이미지의 너비
    height: 185, // 이미지의 높이
    borderRadius: 100, // 원형 모양을 위한 반지름
    resizeMode: 'cover', // 이미지를 cover로 설정하여 비율 유지
    marginLeft: -(185/2), // 이미지의 가로 크기 절반만큼 왼쪽으로 이동
    marginTop: -17, // 이미지의 세로 크기 절반만큼 위로 이동
  },
  circle: {
    width: 244,
    height: 244,
    position: 'absolute',
    marginLeft: -(244/2), // 이미지의 가로 크기 절반만큼 왼쪽으로 이동
    marginTop: -47, // 이미지의 세로 크기 절반만큼 위로 이동

  },


});
