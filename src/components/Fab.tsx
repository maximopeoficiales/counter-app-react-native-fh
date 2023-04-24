import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";

interface MyProps {
  onPress: () => void;
  title: string;
  position?: "br" | "bl";
}
export const Fab = ({ onPress, title, position = "br" }: MyProps) => {
  const IOS = () => {
    return (
      <TouchableOpacity
        style={[
          styles.fabLocation,
          (position == "br") ? styles.right : styles.left
        ]}
        activeOpacity={0.75}
        onPress={onPress}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  };
  const Android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          (position == "br") ? styles.right : styles.left
        ]}
      >

        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple("#B2A4FF", false, 30)}
          onPress={onPress}
        >
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }

  return Platform.OS === "ios" ? <IOS /> : <Android />;
}

const styles = StyleSheet.create({
  fabLocation: {
    position: "absolute",
    bottom: 25,
  },
  right: {
    right: 25
  },
  left: {
    left: 25
  },
  fab: {
    backgroundColor: "#FFB4B4",
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  fabText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center"
  }
})