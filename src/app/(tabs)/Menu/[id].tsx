import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { PizzaSize } from '../../../types';
import products from '../../../../assets/data/products';
import Button from '@components/Button';

const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');
  const product = products[0]; // Consider fetching the product based on the id

  const addToCart = () => {
    if (!product) return;
    console.warn('Add to cart');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />
      
      <Text style={styles.subtitle}>Select size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            key={size}
            onPress={() => setSelectedSize(size)}
            style={[
              styles.size,
              {
                backgroundColor: size === selectedSize ? 'gainsboro' : 'white',
              },
            ]}
          >
            <Text
              style={[
                styles.sizeText,
                { color: size === selectedSize ? 'black' : 'gray' },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>Price: ${product.price.toFixed(2)}</Text>
      <Button onPress={addToCart} text="Add to cart"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    alignSelf: 'center',
    marginBottom: 10,
  },
  subtitle: {
    marginVertical: 10,
    fontWeight: '600',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 'auto',
  },

  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  size: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
});

export default ProductDetailsScreen;
