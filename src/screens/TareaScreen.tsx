import { StyleSheet, View } from 'react-native';

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
    flexDirection: "row",
    justifyContent: 'center',
    backgroundColor: "#6C9BCF",
    alignItems: "center",
  },
  boxPurple: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#5C469C",
  },
  boxOrange: {
    top: 50,
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#FC4F00",
  },
  boxBlue: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#19A7CE",
  },
});