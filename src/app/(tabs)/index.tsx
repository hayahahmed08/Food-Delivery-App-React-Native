import { StyleSheet,Image,Text, View } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';
export default function MenuScreen() {
  return (
    <View>
<ProductListItem product={products[3]}/>
    </View>
);
}

