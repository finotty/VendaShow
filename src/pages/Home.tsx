import React from 'react';
import { VStack, Text, Image} from 'native-base';
import { ButtonIcon } from '../components/ButtonIcon';

import {  ShoppingCart} from 'phosphor-react-native';

export function Home() {
  return (
    <VStack flex={1} mt={5} backgroundColor="secondary.700">
        <VStack backgroundColor="primary.700" height={60} alignItems="center" justifyContent="center" mb={5}>
          <Image
           width={160}
           height={41}
           source={require('../Assets/logo.png')}
           alt='Logo'
          />
        </VStack>

       <ButtonIcon title='CAIXA'/>
       <ButtonIcon title='PRODUTO' />
       <ButtonIcon title='FINANCEIRO' />
    </VStack>
  );
}