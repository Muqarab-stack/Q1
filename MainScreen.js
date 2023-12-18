import React from 'react';
import { View, Button } from 'react-native';

const MainScreen = ({ navigation }) => {
  const navigateToRegistration = () => {
    navigation.navigate('Screen1');
  };

  const navigateToCity = () => {
    navigation.navigate('Screen3');
  };

  return (
    <View>
      <Button title="Registration" onPress={navigateToRegistration} />
      <Button title="City" onPress={navigateToCity} />
    </View>
  );
};

export default MainScreen;
