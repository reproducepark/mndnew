import { ImageBackground, StyleSheet, View } from "react-native";
import React, { useState } from "react";

import ShowDate from "./components/ShowDate";
import ShowDateDiff from "./components/ShowDateDiff";
import ShowCameraAnim from "./components/ShowCameraAnim";
import DateTimePickerForIT from "./components/DatePickerIT";
import DateTimePickerForLT from "./components/DatePickerLT";
import MyComponent from "./components/MyComponent";

const BackGroundImage = require("./assets/images/img_bg_mymnd_wodate.png");

export default function App() {
  const [installedDate, setInstalledDate] = useState(new Date(2024, 4, 5, 18, 11, 0));
  const [lockedDate, setLockedDate] = useState(new Date(2024, 4, 5, 18, 11, 0));

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BackGroundImage}
        resizeMode="contain"
        style={{ flex: 1 }}>
        <ShowDate
          installedDate={installedDate}
          lockedDate={lockedDate} />
        <MyComponent setLockedDate={setLockedDate}/>
        {/* <MyComponent /> */}
        <View style={styles.overlay}>
          <ShowCameraAnim />
          <ShowDateDiff lockedDate={lockedDate} />
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
});
