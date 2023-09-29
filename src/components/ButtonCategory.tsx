import React from 'react';
import { Pressable,Text,IPressableProps } from 'native-base';

type Props = IPressableProps & {
    title: string;
}

export function ButtonCategory({title, ...rest}:Props) {
  return (
    <Pressable  borderWidth={1} rounded={15} justifyContent="center" alignItems='center' mt={1} backgroundColor='white' mr={1} _pressed={{bg:'blue.700'}} {...rest}>
        <Text fontSize={16}>  {title}  </Text>
    </Pressable>
  );
}