import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import images from "../../assets/images";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation()

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
      }}
    >
      <View>
        <Image
          style={{
            width: 150,
            height: 100,
            marginTop: 60,
          }}
          source={images.logo}
        />
      </View>

      <KeyboardAvoidingView>
        <View>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            Login to your account
          </Text>
        </View>

        <View
          style={{
            marginTop: 60,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
              backgroundColor: "#D0D0D0",
              alignItems: "center",
            }}
          >
            <MaterialIcons
              style={{
                marginLeft: 5,
              }}
              name="email"
              size={24}
              color="gray"
            />
            <TextInput
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: 16,
              }}
              placeholder="Enter your email"
              value={email}
              onChangeText={(email) => setEmail(email)}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
              backgroundColor: "#D0D0D0",
              alignItems: "center",
            }}
          >
            <AntDesign
              style={{
                marginLeft: 5,
              }}
              name="lock1"
              size={24}
              color="gray"
            />
            <TextInput
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: 16,
              }}
              placeholder="Enter your password"
              value={password}
              onChangeText={(pw) => setPassword(pw)}
              secureTextEntry={true}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text>Keep me logged in</Text>
          <Text style={{ color: "blue" }}>Forgot password?</Text>
        </View>

        <View style={{ marginTop: 70, alignItems: "center" }}>
          <Pressable
            style={{
              backgroundColor: "#FEBE10",
              width: 300,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              marginBottom: 10
            }}
          >
            <Text style={{ fontSize: 18, color: "#fff" }}>Login</Text>
          </Pressable>

          <Pressable>
            <Text style={{color: "gray"}} onPress={() => navigation.navigate("Register")} >Don't have an account? Sign up</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
