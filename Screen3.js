
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useCityContext } from './CityContext';

const Screen3 = ({ navigation }) => {
  const { city, setCity } = useCityContext();
  const [newCity, setNewCity] = useState('');
  const [newProvince, setNewProvince] = useState('');

  const updateValues = () => {
    setCity({
      cityName: newCity,
      cityProvince: newProvince,
    });
    navigation.navigate('Screen4');
  };

  return (
    <View>
      <TextInput placeholder="Enter City" value={newCity} onChangeText={setNewCity} />
      <TextInput
        placeholder="Enter Province"
        value={newProvince}
        onChangeText={setNewProvince}
      />
      <Button title="Update Values" onPress={updateValues} />
    </View>
  );
};
export default Screen3;
