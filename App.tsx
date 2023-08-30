import { NativeBaseProvider, StatusBar} from 'native-base';

import {THEME} from './src/styles/theme';

import { Routes } from './src/routes';


export default function App() {

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
       barStyle='light-content'
       backgroundColor="#004358"
       translucent
      />
        <Routes/>
    </NativeBaseProvider>
  
  );
}