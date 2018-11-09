import { StyleSheet } from "react-native";

const HomeScreenStyles = StyleSheet.create({
  headerTitleStyle: {
    color: "white",
    flex: 1,
    fontSize: 25,
    textAlign: "center"
  },
  container: {
    flex: 1
  },
  headerStyle: {
    backgroundColor: "#ee3e82"
  },
  itemComponentStyle: {
    justifyContent: "flex-end",
    width: 150,
    height: 150
  },
  itemComponentViewStyle: {
    flexShrink: 1,
    backgroundColor: "rgba(255,255,255, 0.7)"
  },
  itemComponentTextStyle: {
    textAlign: "center",
    fontSize: 15,
    color: "black"
  },
  itemComponentSelectedStyle: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(248, 227, 245, 0.6)"
  }
});

export default HomeScreenStyles;
