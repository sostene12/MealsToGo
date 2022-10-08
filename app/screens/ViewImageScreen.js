import { View, Text, Image, StyleSheet } from "react-native";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <Image
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: "40",
    left: "30",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
