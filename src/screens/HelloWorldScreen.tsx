import { Text, View } from "react-native"

export const HelloWorldScreen = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: "white",
      justifyContent: "center"
    }}>
      <Text style={{
        fontSize: 45,
        textAlign: "center",
      }}>Holaaa 2</Text>
    </View>
  )
}