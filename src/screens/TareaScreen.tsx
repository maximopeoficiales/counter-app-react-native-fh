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
    justifyContent: 'space-between',
    backgroundColor: "#6C9BCF",
  },
  boxPurple: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#5C469C",
    alignSelf: "flex-end",
  },
  boxOrange: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#FC4F00",
    alignSelf: "center",
  },
  boxBlue: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#19A7CE",
  },
});