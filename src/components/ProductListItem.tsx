import { StyleSheet, Image, Text, View } from "react-native";
import products from "@/assets/data/products";

const ProductListItem = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  price: {
    color: "blue",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
});

export default ProductListItem;