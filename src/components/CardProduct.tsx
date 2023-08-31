import React from 'react';
import { VStack, HStack, Text, Image,IPressableProps ,Pressable } from 'native-base';

type Props = IPressableProps & {
    product: string;
    description: string;
    value: string;
    amount:string;
}

export function CardProduct({product,description,value,amount}:Props) {
  return (
    <Pressable mt={4} h={62} p={1} _pressed={{bg:'blue.700'}}>
        <HStack justifyContent='center'>
             <VStack justifyContent='center' width={60} height={60} ml={2} borderWidth={1} mr={2}>
                <Text  textAlign='center'>IMAGE</Text>
             </VStack>
            <HStack justifyContent='space-between' width='80%' >
                <VStack>
                 <Text fontSize={16} fontWeight='medium'>{product}</Text>
                 <Text fontSize={14} fontWeight='medium' color='gray.500'>{description}</Text>
                </VStack>
                <VStack pr={3}>
                 <Text mr={1} fontSize={16} fontWeight='bold'>R$ {value}</Text>
                 <Text textAlign='center' color='blue.300' fontSize={15}>{amount}</Text>
                </VStack>
            </HStack>

        </HStack>
    </Pressable>
  );
}