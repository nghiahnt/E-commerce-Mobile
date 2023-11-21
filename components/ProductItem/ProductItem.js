import { Pressable, Image, Text, View } from "react-native";
import { useState } from "react";

import styles from "./ProductStyle";
import images from "../../assets/images";

function ProductItem({props}) {
  const [addedToCart, setAddedToCart] = useState(false);

  return (
    <>
      <Pressable style={styles.container}>
        <Image
          style={{
            width: 150,
            height: 150,
            resizeMode: "contain"
          }}
          source={{uri: props?.image}}
        />
        <Text numberOfLines={1} style={styles.title}>
          {props?.title}
        </Text>

        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            {props.price}
          </Text>
          <Text style={{ color: "#FFC72C", fontWeight: "bold" }}>{props?.rating?.rate} ratings</Text>
        </View>

        <Pressable
          style={{
            backgroundColor: "#FFC72C",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
            marginTop: 10,
          }}
        >
          {addedToCart ? (
            <View>
              <Text>Added to Cart</Text>
            </View>
          ) : (
            <Text>Add to Cart</Text>
          )}
        </Pressable>
      </Pressable>
    </>
  );
}

export default ProductItem;
