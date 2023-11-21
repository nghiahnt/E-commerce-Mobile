import { Platform } from "react-native";

const styles = {
  container: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
    flex: 1,
    backgroundColor: "white",
  },
  viewStyle: {
    backgroundColor: "#00CED1",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  pressAbleStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 7,
    gap: 10,
    backgroundColor: "white",
    borderRadius: 3,
    height: 38,
    flex: 1,
  },
  placeholderStyle: {
    
  }
};

export default styles;