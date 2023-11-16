const { SafeAreaView, Text, StyleSheet } = require("react-native");

const HomeScreen = () => {
  return (
    <>
      <SafeAreaView>
        <Text style={styles.test}>
            test
        </Text>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    test: {
        color: "red",
    }
})


