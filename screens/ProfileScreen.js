import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useLayoutEffect, useEffect, useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { UserType } from "../UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

function ProfileScreen() {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);

  // Get userId
  const { userId, setUserId } = useContext(UserType);

  // Fetch user information
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `https://e-commerce-backend-7puk.onrender.com/api/user/profile/${userId}`
        );
        const { message } = response.data;
        setUser(message);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchUserProfile();
  }, []);

  // Fetch order information
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `https://e-commerce-backend-7puk.onrender.com/api/orders/${userId}`
        );
        const message = response.data;
        setOrders(message);

        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchOrders();
  }, []);
  console.log("orders", orders);

  // Delete user token and logout
  const logout = () => {
    clearAuthToken();
  };
  const clearAuthToken = async () => {
    await AsyncStorage.removeItem("authToken");
    console.log("auth token cleared");
    navigation.replace("Login");
  };

  return (
    <>
      <View
        style={{
          marginTop: 30,
          backgroundColor: "#00CED1",
          height: 50,
          position: "fixed",
        }}
      >
        <Text
          style={{
            lineHeight: 50,
            paddingLeft: 20,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Profile
        </Text>
      </View>
      <ScrollView style={{ padding: 10, flex: 1, backgroundColor: "#fff" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Welcome {user?.name}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginTop: 12,
          }}
        >
          <Pressable
            style={{
              padding: 10,
              backgroundColor: "#E0E0E0",
              borderRadius: 25,
              flex: 1,
            }}
          >
            <Text style={{ textAlign: "center" }}>Your orders</Text>
          </Pressable>

          <Pressable
            style={{
              padding: 10,
              backgroundColor: "#E0E0E0",
              borderRadius: 25,
              flex: 1,
            }}
          >
            <Text style={{ textAlign: "center" }}>Your Account</Text>
          </Pressable>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginTop: 12,
          }}
        >
          <Pressable
            style={{
              padding: 10,
              backgroundColor: "#E0E0E0",
              borderRadius: 25,
              flex: 1,
            }}
          >
            <Text style={{ textAlign: "center" }}>Buy Again</Text>
          </Pressable>

          <Pressable
            onPress={logout}
            style={{
              padding: 10,
              backgroundColor: "#E0E0E0",
              borderRadius: 25,
              flex: 1,
            }}
          >
            <Text style={{ textAlign: "center" }}>Logout</Text>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10 }}
        >
          {loading ? (
            <Text>Loading...</Text>
          ) : orders.length > 0 ? (
            orders.map((order) => (
              <Pressable
                style={{
                  marginTop: 20,
                  padding: 15,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "#d0d0d0",
                  marginHorizontal: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={order._id}
              >
                {/* Render the order information here */}
                {order.product.slice(0, 1)?.map((product) => (
                  <View style={{ marginVertical: 10 }} key={product._id}>
                    <Image
                      source={{ uri: product.image }}
                      style={{ width: 100, height: 100, resizeMode: "contain" }}
                    />
                  </View>
                ))}
              </Pressable>
            ))
          ) : (
            <Text>No orders found</Text>
          )}
        </ScrollView>
      </ScrollView>
    </>
  );
}

export default ProfileScreen;
