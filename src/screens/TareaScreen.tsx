import { StyleSheet, Text, View } from 'react-native';

interface MyProps {
}
export const TareaScreen = ({ }: MyProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxPurple}></View>
      <View style={styles.boxOrange}></View>
      <View style={styles.boxBlue}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6C9BCF",
    justifyContent: "center",
  },
  boxPurple: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#5C469C",
  },
  boxOrange: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#FC4F00",
  },
  boxBlue: {
    width: "auto",
    height: 100,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#19A7CE",
  },
});