import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import StackNavigation from './Navigation';
import { AuthProvider } from './auth/context/AuthContext';
export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar backgroundColor='white' />
        <StackNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
}


