import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    width: width,
  },
  slide: {
    width: width,
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  indicator: {
    width: 5,
    height: 5,
    borderRadius: 5,
    margin: 2,
  },
  activeIndicator: {
    backgroundColor: "#000",
  },
  inactiveIndicator: {
    backgroundColor: "#999",
  },
};

export default styles;
