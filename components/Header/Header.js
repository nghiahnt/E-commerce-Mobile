import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { View, Pressable, TextInput, StyleSheet } from "react-native";

function Header() {
  return (
    <>
      {/* Header - Search */}
      <View style={styles.viewStyle}>
        <Pressable style={styles.pressAbleStyle}>
          <AntDesign
            style={{ paddingLeft: 10 }}
            name="search1"
            size={22}
            color="black"
          />
          <TextInput placeholder="Search..." />
        </Pressable>
        <Feather name="mic" size={24} color="black" />
      </View>
    </>
  );
}

export default Header;

const styles = StyleSheet.create({
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
});
