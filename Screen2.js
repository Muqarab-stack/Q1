import React from 'react';
import { View, Text } from 'react-native';
import { useRegistrationContext } from './RegistrationContext';

const Screen2 = () => {
  const { registration } = useRegistrationContext();

  return (
    <View>
      <Text>Registration Number: {registration.registrationNumber}</Text>
      <Text>Name: {registration.name}</Text>
    </View>
  );
};

export default Screen2;
