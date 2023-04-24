import { StyleSheet, View } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxPurple}></View>
      <View style={styles.boxOrange}></View>
      <View style={styles.boxGreen}></View>
      <View style={styles.boxRed}></View>
    </View>
  )
}
const styles = StyleSheet.create({

  container: {
    // flex: 1,
    width: 400,
    height: 400,
    // justifyContent: 'center',
    // alignItems: "center",
    backgroundColor: "#28C4D9",
  },
  boxPurple: {
    width: 100,
    height: 100,
    backgroundColor: "#5856D6",
    borderWidth: 10,
    borderColor: "white",
    position: "absolute",
    right: 0,
  },
  boxOrange: {
    position: "absolute",
    width: 100,
    height: 100,
    backgroundColor: "#F0A23B",
    borderWidth: 10,
    borderColor: "white",
    bottom: 0,
    right: 0,
  },
  boxGreen: {
    position: "absolute",
    width: 100,
    height: 100,
    backgroundColor: "green",
    borderWidth: 10,
    borderColor: "white",
    bottom: 0,
    left: 0,
  },
  boxRed: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderWidth: 10,
    borderColor: "white",
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    // top: 0,
    // right: 0,
    // hace que todo lo comentado
    // ...StyleSheet.absoluteFillObject
  }
});