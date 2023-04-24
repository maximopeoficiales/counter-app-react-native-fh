import { StyleSheet, Text, View } from 'react-native'

export const FlexBoxScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Caja1</Text>
      <Text style={styles.box2}>Caja2</Text>
      <Text style={styles.box3}>Caja3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28C4D9",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  box1: {
    borderWidth: 2,
    borderColor: "white",
    fontSize: 30
  },
  box2: {
    borderWidth: 2,
    borderColor: "white",
    fontSize: 30
  },
  box3: {
    borderWidth: 2,
    borderColor: "white",
    fontSize: 30
  },
});