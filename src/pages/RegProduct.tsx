import React,{useRef} from 'react';
import { Animated, View,Image,ScrollView,KeyboardAvoidingView,Text } from 'react-native';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

const H_MAX_HEIGHT = 300;
const H_MIN_HEIGHT = 60;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

export function RegProduct() {

  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange:[0, H_SCROLL_DISTANCE],
    outputRange:[H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate:'clamp'
  })

  const imageScale = scrollOffsetY.interpolate({
    inputRange:[0, 250],
    outputRange:[250, 0 ],
    extrapolate:'clamp'
  })

  const TextOpacity = scrollOffsetY.interpolate({
    inputRange:[1, 270, 270],
    outputRange:[0,0,1 ],
    extrapolate:'clamp'
  })

  const imageOpacity = scrollOffsetY.interpolate({
    inputRange:[1, 175, 280],
    outputRange:[1,0.5,0 ],
    extrapolate:'clamp'
  })
  return (
    <KeyboardAvoidingView behavior='height' keyboardVerticalOffset={-70} style={{backgroundColor:'#fff',flex:1, marginTop:5 }}>

    <Animated.View style={{
      height:headerScrollHeight,
      backgroundColor:'#004358', 
      justifyContent:'center' ,
      alignItems:'center',
      position:'absolute',
      top:0,
      left:0,
      right:0,
      overflow:'hidden',
      zIndex:99
     }}>
        <Animated.Image
        source={require('../Assets/melhoria.png')}
        style={{
          width:'90%',
          height:imageScale,
          resizeMode:'contain',
          opacity:imageOpacity
        }}
        
        />
    </Animated.View>

    <Animated.View style={{
      width:'100%',
      height:55,
      justifyContent:'center',
      alignItems:'center',
      opacity:TextOpacity,
      position:'absolute',
      top:5,
      zIndex:99,
      backgroundColor:'#004358'
    }}>
      <Text style={{fontSize:20, fontWeight:'bold', color:'#fff'}}>Produto</Text>
    </Animated.View>

    <ScrollView 
     onScroll={Animated.event([{
       nativeEvent: {
         contentOffset:{ y: scrollOffsetY}
      },
    }],
     { useNativeDriver:false})}
    scrollEventThrottle={16}
    style={{
      paddingTop:H_MAX_HEIGHT,    
    }}
    >
        <Input placeholder='Nome do produto' InputLeftElement={<Image source={require('../Assets/product-name.png')} style={{width:41, height:45,resizeMode:'contain'}} />}/>
        <Input placeholder='Quantidade atual' InputLeftElement={<Image source={require('../Assets/quantidadeAtual.png')} style={{width:45, height:45, resizeMode:'contain'}} />}/>
        <Input placeholder='Quantidade mínima' InputLeftElement={<Image source={require('../Assets/caixas.png')} style={{width:39, height: 39, resizeMode:'contain'}} />}/>
        <Input placeholder='Preço venda' InputLeftElement={<Image source={require('../Assets/etiqueta-de-preco.png')} style={{width:45, height:45, resizeMode:'contain'}}/>}/>
        <Input placeholder='Preço custo' InputLeftElement={<Image source={require('../Assets/cifrao.png')} style={{width:45, height:45, resizeMode:'contain'}}/>}/>
        <Input placeholder='Descrição' InputLeftElement={<Image source={require('../Assets/descricao.png')} style={{width:45, height:45, resizeMode:'contain'}}/>}/>
        <Input placeholder='Categoria' InputLeftElement={<Image source={require('../Assets/categorias.png')} style={{width:45, height:45, resizeMode:'contain'}}/>}/>
 
        <View style={{height:350}}/>

    </ScrollView>
     
     <View style={{height:70, justifyContent:'center'}} >
        <Button title='Salvar'/>
     </View>

    </KeyboardAvoidingView>
  
  );
}