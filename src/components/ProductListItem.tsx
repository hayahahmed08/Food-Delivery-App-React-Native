import { StyleSheet, Image, Text, View , Pressable, } from "react-native";
import products from "../../assets/data/products";
import {Product} from '../types'
import { Link } from "expo-router";

type ProductListItemProps = {
    product: Product;
}
const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/Menu/${product.id}`} asChild>
    <Pressable style={styles.container}>
      <Image  source={{ uri: product.image || 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png' }}
      style={styles.image}
      resizeMode="contain"/>  
       <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    maxWidth:'50%'
},
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