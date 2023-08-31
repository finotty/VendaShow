import React from 'react';
import { VStack,HStack, Text, IconButton, useTheme } from 'native-base';
import { CaretLeft, MagnifyingGlass } from "phosphor-react-native";
import { useNavigation } from '@react-navigation/native';
import { ButtonCategory } from '../components/ButtonCategory';

export function Products() {
    const {colors} = useTheme();
    const navigation = useNavigation();
  return (
    <VStack flex={1} mt={5}>
        <HStack height={50} bg='white' justifyContent='space-between' shadow='8'>
            <HStack justifyContent='center' mt={1}>
                <IconButton
                icon={<CaretLeft color={colors.blue[300]} size={24} />}
                onPress={() => navigation.goBack()}
                />
                <Text mt={1} ml={3} fontSize={22} fontWeight='medium' >Produto</Text> 
            </HStack>
            <IconButton
             mr={2}
             icon={<MagnifyingGlass color={colors.blue[300]} size={26} />}
             onPress={() => alert("buscar")}
            />
        </HStack>
        <HStack pl={2} pr={2}>
            <ButtonCategory title='Todos' />
        </HStack>
    </VStack>
  );
}