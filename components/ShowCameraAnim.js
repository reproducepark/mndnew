import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View, Animated} from "react-native";

export default function ShowCameraAnim() {
    const [rotationDegree, setRotationDegree] = useState(0);
    const CameraImg = require("../assets/images/img_policy_state_camera_block.png");
    const CircleImg = require("../assets/images/circle_image.png");

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
        <View>
            <Image
                source={CameraImg}
                style={styles.camera}>
            </Image>
            <Animated.Image
                source={CircleImg}
                style={[styles.circle, circleRotationStyle]}>
            </Animated.Image>
        </View>
    )
}

const cameraWidth = 185;
const circleWidth = 244;
const marginCC = 90;

const styles = StyleSheet.create({
  camera: {
    width: cameraWidth, // 이미지의 너비
    height: cameraWidth, // 이미지의 높이
    position: 'absolute',
    borderRadius: 100, // 원형 모양을 위한 반지름
    marginLeft: -(cameraWidth / 2), // 이미지의 가로 크기 절반만큼 왼쪽으로 이동
    marginTop: -(cameraWidth / 2) + marginCC, // 이미지의 세로 크기 절반만큼 위로 이동
  },
  circle: {
    width: circleWidth,
    height: circleWidth,
    position: 'absolute',
    marginLeft: -(circleWidth / 2),
    marginTop: -(circleWidth / 2) + marginCC,
  },
});