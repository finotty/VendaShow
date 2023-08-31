import React from 'react';
import { VStack,HStack, Text, IconButton, useTheme,FlatList, } from 'native-base';
import { CaretLeft, MagnifyingGlass } from "phosphor-react-native";
import { useNavigation } from '@react-navigation/native';
import { ButtonCategory } from '../components/ButtonCategory';
import { CardProduct } from '../components/CardProduct';
import { Button } from '../components/Button';

export function Products() {
    const {colors} = useTheme();
    const navigation = useNavigation();

    const cardData = [
        { product: "Produto 1", description: "descrição do produto", value: 1.00, amount:10 },
        { product: "Produto 2", description: "descrição do produto", value: 20.00, amount:10 },
        { product: "Produto 3", description: "descrição do produto", value: 15.00, amount:10 },
        { product: "Produto 4", description: "descrição do produto", value: 18.00, amount:10 },
        { product: "Produto 5", description: "descrição do produto", value: 100.00, amount:10 },
        { product: "Produto 2", description: "descrição do produto", value: 20.00, amount:10 },
        { product: "Produto 3", description: "descrição do produto", value: 15.00, amount:10 },
        { product: "Produto 4", description: "descrição do produto", value: 18.00, amount:10 },
        { product: "Produto 5", description: "descrição do produto", value: 100.00, amount:10 },
        { product: "Produto 4", description: "descrição do produto", value: 18.00, amount:10 },
        { product: "Produto 5", description: "descrição do produto", value: 100.00, amount:10 },
        { product: "Produto 2", description: "descrição do produto", value: 20.00, amount:10 },
        { product: "Produto 3", description: "descrição do produto", value: 15.00, amount:10 },
        { product: "Produto 4", description: "descrição do produto", value: 18.00, amount:10 },
        { product: "Produto 5", description: "descrição do produto", value: 100.00, amount:10 },
      
      ];
      const buttonData = [
        { title: "Todas" },
        { title: "Categoria 1" },
        { title: "Categoria 2" },
        { title: "Categoria 3" },
        { title: "Categoria 4" },
        { title: "Categoria 5" },
      ];

    function renderItem({ item }:any) {
        return (<ButtonCategory title={item.title} />);
      }

    function renderItemCard({ item }:any) {
        return (<CardProduct product={item.product} description={item.description} value={item.value} amount={item.amount} />);
      }

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
        
        <HStack>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={buttonData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </HStack>

        <VStack>
           <FlatList
                showsVerticalScrollIndicator={false}
                data={cardData}
                renderItem={renderItemCard}
                keyExtractor={(item, index) => index.toString()}
            />

             <VStack  position='absolute' alignSelf='flex-end' top='75%' right={2}>
                <Button title='+' w={65} h={65} rounded={35} />
             </VStack>
        </VStack>
    </VStack>
  );
}