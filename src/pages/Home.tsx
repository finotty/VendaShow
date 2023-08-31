import React from 'react';
import { VStack, Text, Image} from 'native-base';
import { ButtonIcon } from '../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation();
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
       <ButtonIcon title='PRODUTO' onPress={() => navigation.navigate('products')}/>
       <ButtonIcon title='FINANCEIRO' />
    </VStack>
  );
}