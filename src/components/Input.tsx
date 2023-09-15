import React from 'react';
import { Input as NativeBaseInput, IInputProps,Text } from 'native-base';

export function Input({...rest}: IInputProps) {
  return (
    <NativeBaseInput 
     // bg="blue.700"
      height={20}
      //size="md"
      w='95%'
      borderBottomWidth={1}
      fontSize="md"
      //fontFamily="body"
      color="white"
      placeholderTextColor="gray.300"
      ml={3}
      borderWidth={0}
      _focus={{
       bg:'white',
        borderColor:'blue.300',
        
      }}
      {...rest}
    />
  );
}