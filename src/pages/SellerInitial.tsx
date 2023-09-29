import React,{useState} from 'react';
import { VStack, HStack, IconButton, Text, useTheme, FlatList, ScrollView } from 'native-base';
import { CaretLeft, Camera } from "phosphor-react-native";
import { useNavigation } from '@react-navigation/native';
import { Input } from '../components/Input';
import { ButtonCategory } from '../components/ButtonCategory';
import { CardProductSeller } from '../components/CardProductSeller';

export function SellerInitial() {
    const {colors} = useTheme();
    const navigation = useNavigation();

    const [total, setTotal] = useState('0,00');

    const buttonData = [
        { title: "Todas" },
        { title: "Categoria 1" },
        { title: "Categoria 2" },
        { title: "Categoria 3" },
        { title: "Categoria 4" },
        { title: "Categoria 5" },
      ];
      const cardData = [
        { product: "Combo para 2 pessoas", description: "descrição do produto", value: 1.90 },
        { product: "Combo para 3 pessoas", description: "descrição do produto", value: 20.00},
        { product: "Combo para 4 pessoas", description: "descrição do produto", value: 15.00},
        { product: "Combo para 5 pessoas", description: "descrição do produto", value: 18.00 },
        { product: "X-Tudo", description: "descrição do produto", value: 100.00},
        { product: "Produto 6", description: "descrição do produto", value: 20.00},
        { product: "Produto 7", description: "descrição do produto", value: 1.00 },
        { product: "Produto 8", description: "descrição do produto", value: 20.00},
        { product: "Produto 9", description: "descrição do produto", value: 15.00},
        { product: "Produto 10", description: "descrição do produto", value: 18.00 },
        { product: "Produto 11", description: "descrição do produto", value: 100.00},
        { product: "Produto 12", description: "descrição do produto", value: 20.00},
      
      ];

      function renderItem({ item }:any) {
        return (<ButtonCategory title={item.title} />);
      }

      function renderItemCard({ item }:any) {
        return (<CardProductSeller product={item.product} description={item.description} value={item.value} />);
      }
  return (
    <VStack flex={1} mt={5}>
       
        <HStack  mt={1} height={50} bg='white' shadow='8'>
         <IconButton
            icon={<CaretLeft color={colors.blue[300]} size={24} />}
            onPress={() => navigation.goBack()}
         />
            <Text mt={1} ml={3} fontSize={22} fontWeight='medium' >Caixa</Text> 
        </HStack>
          
        <HStack justifyContent='center' mt={5}>
            <Text fontSize={32} fontWeight='medium' >R${total}</Text>
            <Text borderWidth={1}>carrinho</Text>
        </HStack>

        <HStack borderWidth={1} m={2} rounded={25} h={53} bg='white'>
            <IconButton
             icon={<Camera color={colors.gray[300]} size={30} />}
            />
            <Input placeholder='Pesquisar produto' h={50} borderBottomWidth={0}  w='80%' rounded={25} _focus={{bg:'',borderColor:'',}} />
        </HStack>
        <HStack ml={2}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={buttonData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </HStack>

         
         <FlatList
                
                showsVerticalScrollIndicator={false}
                data={cardData}
                renderItem={renderItemCard}
                keyExtractor={(item, index) => index.toString()}
                mt={5}
                
            />
       
        
    </VStack>
  );
}