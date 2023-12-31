import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RegistrationProvider } from './RegistrationContext';
import {CityProvider} from './CityContext'
import MainScreen from './MainScreen';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RegistrationProvider>
        <CityProvider>
          <Stack.Navigator>
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
          <Stack.Screen name="Screen3" component={Screen3} />
          <Stack.Screen name="Screen4" component={Screen4} />
           
          </Stack.Navigator>
        </CityProvider>
      </RegistrationProvider>
    </NavigationContainer>
  );
};

export default App;
