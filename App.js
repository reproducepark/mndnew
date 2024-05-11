import { ImageBackground, StyleSheet, View} from "react-native";

import ShowDate from "./components/ShowDate";
import ShowDateDiff from "./components/ShowDateDiff";
import ShowCameraAnim from "./components/ShowCameraAnim";

const BackGroundImage = require("./assets/images/img_bg_mymnd_wodate.png");

export default function App() {

  const installedDate = new Date(2011, 10, 11, 11, 11, 0);
  const lockedDate = new Date(2024, 0, 1, 0, 0, 0);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BackGroundImage}
        resizeMode="contain"
        style={{ flex: 1 }}>
        <ShowDate installedDate={installedDate} lockedDate={lockedDate} />
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
