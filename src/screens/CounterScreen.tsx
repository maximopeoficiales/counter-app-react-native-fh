import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Fab } from "../components/Fab";

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Contador: {counter}
      </Text>

      <Fab
        onPress={() => setCounter(counter + 1)}
        title="+1"
      />
      <Fab
        onPress={() => setCounter(counter - 1)}
        title="-1"
        position="bl"
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    top: 15
  },
})