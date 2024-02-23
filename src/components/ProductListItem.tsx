import { StyleSheet, Image, Text, View } from "react-native";
import products from "../../assets/data/products";
import {Product} from '../types'

type ProductListItemProps = {
    product: Product;
}
const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image || 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png' }}
      style={styles.image}/>  
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