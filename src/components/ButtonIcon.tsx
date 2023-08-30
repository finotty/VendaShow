import React from 'react';
import { VStack, Pressable, Icon, useTheme, Text, IPressableProps, Image } from 'native-base';
import {  ShoppingCart} from 'phosphor-react-native';


type Props = IPressableProps & {
    title: string;
}

export function ButtonIcon({title, ...rest}: Props) {
    const {colors} = useTheme();
  return (
    <Pressable borderWidth={1} backgroundColor="white" width={200} height={150} alignSelf="center" _pressed={{bg:'blue.700'}}
     justifyContent='center' alignItems='center' rounded={10} shadow={'8'} mt={5}
     onPress={() => alert('test')}
     {...rest}
    >
      { (title === 'PRODUTO') ?  <Image
           width={87}
           height={90}
           source={require('../Assets/product-management.png')}
           alt='Logo'
          />
          : (title === 'FINANCEIRO') ?
          <Image
           width={87}
           height={87}
           source={require('../Assets/financeiro.png')}
           alt='Logo'
          /> :
          (title === 'CAIXA') ?
          <Image
          width={71}
          height={71}
          source={require('../Assets/Caixa.png')}
          alt='Logo'
         /> 
           : null
          }
        <Text fontSize={22}>{title}</Text>  
    </Pressable>
  );
}