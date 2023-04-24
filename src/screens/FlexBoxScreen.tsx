import { StyleSheet, Text, View } from 'react-native'

export const FlexBoxScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Caja1</Text>
      <Text style={styles.box2}>Caja2</Text>
      <Text style={styles.box3}>Caja3</Text>
      <Text style={styles.box3}>Caja3</Text>
      <Text style={styles.box3}>Caja3</Text>
      <Text style={styles.box3}>Caja3</Text>
      <Text style={styles.box3}>Caja3</Text>
      <Text style={styles.box3}>Caja3</Text>
      <Text style={styles.box3}>Caja3</Text>
      <Text style={styles.box3}>Caja3</Text>
      <Text style={styles.box3}>Caja3</Text>
      <Text style={styles.box3}>Caja3</Text>
      <Text style={styles.box3}>Caja3</Text>
      <Text style={styles.box3}>Caja3</Text>
      <Text style={styles.box3}>Caja3</Text>
      <Text style={styles.box3}>Caja3</Text>
      <Text style={styles.box3}>Caja3</Text>
      <Text style={styles.box3}>Caja3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: "#28C4D9",
    flexDirection: "row",
  },
  box1: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: "white",
    fontSize: 30
  },
  box2: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: "white",
    fontSize: 30
  },
  box3: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: "white",
    fontSize: 30
  },
});