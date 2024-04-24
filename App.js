import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import StackNavigation from './Navigation';
export default function App() {
  return (

    <NavigationContainer>
      <StatusBar backgroundColor='white' />
      <StackNavigation />

    </NavigationContainer>
  );
}


