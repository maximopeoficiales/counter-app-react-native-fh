import { StyleSheet, View, Text, useWindowDimensions } from 'react-native';

export const DimensionsScreen = () => {
   const { width, height } = useWindowDimensions();
   return (
      <View>
         <View style={styles.container}>
            <View style={{ ...styles.boxPurple, width: width * 0.5 }}></View>
            <View style={styles.boxOrange}></View>
         </View>
         <Text style={styles.title}>W: {width}, H: {height}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      width: "100%",
      height: 200,
      backgroundColor: "red"
   },
   boxPurple: {
      backgroundColor: "#5856D6",
      height: "50%",
   },
   boxOrange: {
      backgroundColor: "#F0A23B",
      height: "50%",
   },
   title: {
      fontSize: 15
   }
});