import React from 'react';
import { VStack,Text,IPressableProps ,Pressable, HStack } from 'native-base';

type Props = IPressableProps & {
    product: string;
    description: string;
    value: string;
}

export function CardProductSeller({product,description,value}:Props) {
  return (
    <Pressable  mb={2} w='95%' p={1} justifyContent='center' rounded={10} alignItems='center' ml={2} bg='white' shadow='7' _pressed={{bg:'blue.700'}}>
       
             <HStack ml={5}>
                <VStack justifyContent='center' ml={3} width= {78} height={78}  borderWidth={1} rounded={10}>
                <Text  textAlign='center'>IMAGE</Text>

                </VStack>
                <VStack justifyContent='center' w='90%' ml={2}>   
                    <Text fontSize={14} fontWeight='medium' textAlign='justify'>{product}</Text>
                    <Text fontSize={11} fontWeight='medium' color='gray.500'>{description}</Text>
                    <Text mr={1} fontSize={16} fontWeight='bold'>R$ {value}</Text>
                </VStack>
             </HStack>

        
    </Pressable>
  );
}