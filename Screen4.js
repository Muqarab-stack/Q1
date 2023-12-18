import React from 'react';
import { View, Text } from 'react-native';
import { useCityContext } from './CityContext';

const Screen4 = () => {
  const { city } = useCityContext();

  return (
    <View>
      <Text>City: {city.cityName}</Text>
      <Text>Province: {city.cityProvince}</Text>
    </View>
  );
};

export default Screen4;
