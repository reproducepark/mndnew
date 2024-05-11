import React, { useEffect, useState } from "react";
import { Text, Image, ImageBackground, StyleSheet, View, Animated, Easing } from "react-native";

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

  const installedDate = new Date(2024, 4, 2, 17, 30, 0);
  const lockedDate = new Date(2024, 4, 2, 17, 16, 0);
  const [timeDifference, setTimeDifference] = useState(0);
  const formatTimeDifference = (difference) => {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return [`${days}일`,`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`];
  };


  useEffect(() => {
    const timerID = setInterval(() => {
      const currentTime = new Date();
      const difference = currentTime - lockedDate;
      setTimeDifference(difference);
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

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
          <Text style={styles.text1}>{formatTimeDifference(timeDifference)[0]}</Text>
          <Text style={styles.text2}>{formatTimeDifference(timeDifference)[1]}</Text>

        </View>
      </ImageBackground>
    </View>
  );
}

const cameraWidth = 185;
const circleWidth = 244;
const marginCC = 90;

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
  text1: {
    color: '#cfcfcf',
    fontSize: 18,
    fontVariant: ['tabular-nums'],
    textAlign: 'center',
    position: 'absolute',
    fontWeight: '500',
    top: 118,
    left: -10,
  },
  text2: {
    color: '#cfcfcf',
    fontSize: 18,
    fontVariant: ['tabular-nums'],
    textAlign: 'justify',
    position: 'absolute',
    fontWeight: '500',
    top: 138,
    left: -37,
  },
  camera: {
    width: cameraWidth, // 이미지의 너비
    height: cameraWidth, // 이미지의 높이
    position: 'absolute',
    borderRadius: 100, // 원형 모양을 위한 반지름
    marginLeft: -(cameraWidth/2), // 이미지의 가로 크기 절반만큼 왼쪽으로 이동
    marginTop: -(cameraWidth/2) + marginCC, // 이미지의 세로 크기 절반만큼 위로 이동
  },
  circle: {
    width: circleWidth,
    height: circleWidth,
    position: 'absolute',
    marginLeft: -(circleWidth/2),
    marginTop: -(circleWidth/2) + marginCC,
  },


});
