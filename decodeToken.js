import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

const decodedToken = async () => {
  const token = await AsyncStorage.getItem("authToken");
  const decodedToken = jwt_decode(token);
  const decodedUserId = decodedToken.userId;

  return decodedUserId;
};

export default decodedToken;
