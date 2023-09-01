import React from 'react';
import {  VStack ,Text, HStack, Image,ScrollView, KeyboardAvoidingView} from 'native-base';
import { Input } from '../components/Input';
import { Button } from '../components/Button';


export function RegProduct() {
  return (
    <KeyboardAvoidingView behavior='height' style={{backgroundColor:'#fff',flex:1 }}>
    <ScrollView >
     
         <VStack h={300} bg='primary.700' justifyContent='center' alignItems='center'>
            <Image
             source={require('../Assets/melhoria.png')}
             alt=''
             w={140}
             h={144}
             />
         </VStack>

            <VStack  alignItems='center'>

                    <Input placeholder='Nome do produto' InputLeftElement={<Image source={require('../Assets/product-name.png')} alt='' width={35} h={39}/>}/>
                    <Input placeholder='Quantidade atual' InputLeftElement={<Image source={require('../Assets/quantidadeAtual.png')} alt='' width={39} h={37}/>}/>
                    <Input placeholder='Quantidade mínima' InputLeftElement={<Image source={require('../Assets/caixas.png')} alt='' width={39} h={39}/>}/>
                    <Input placeholder='Preço venda' InputLeftElement={<Image source={require('../Assets/etiqueta-de-preco.png')} alt='' width={39} h={39}/>}/>
                    <Input placeholder='Preço custo' InputLeftElement={<Image source={require('../Assets/cifrao.png')} alt='' width={39} h={39}/>}/>
                    <Input placeholder='Descrição' InputLeftElement={<Image source={require('../Assets/descricao.png')} alt='' width={39} h={39}/>}/>
                    <Input placeholder='Categoria' InputLeftElement={<Image source={require('../Assets/categorias.png')} alt='' width={39} h={39}/>}/>
                    
            </VStack>

   

    </ScrollView>
     
     <VStack >
        <Button title='Salvar' mt={10}/>

     </VStack>
    </KeyboardAvoidingView>
  
  );
}