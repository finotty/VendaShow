import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { RegProduct } from '../pages/RegProduct';

//headerShown: false
const {Navigator, Screen}= createNativeStackNavigator();

export function AppRoutes() {
    return(
      <Navigator screenOptions={{  }}>
          <Screen name='home' component={Home} options={{headerShown: false}}/>
          <Screen name='products' component={Products} options={{headerShown: false}}/>
          <Screen name='regproduct' component={RegProduct} options={{headerShown: false}}/> 
      </Navigator>
    );
}
