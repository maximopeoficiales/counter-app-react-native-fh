import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'

export const PositionScreen = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>W: {width.toFixed(2)}, H: {height.toFixed(2)}</Text>
      <View style={styles.boxPurple}></View>
      <View style={styles.boxOrange}></View>
    </View>
  )
}
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginVertical: 20,
    textAlign: "center"
  },
  container: {
    flex: 1,
    // width: 300,
    // height: 300,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#28C4D9"
  },
  boxPurple: {
    width: 100,
    height: 100,
    backgroundColor: "#5856D6",
    borderWidth: 10,
    borderColor: "white",
    // top: 100,
    // left: 100,
  },
  boxOrange: {
    // position:"absolute",
    width: 100,
    height: 100,
    backgroundColor: "#F0A23B",
    borderWidth: 10,
    borderColor: "white",
    top: -50,
    left: 50,
  }
});