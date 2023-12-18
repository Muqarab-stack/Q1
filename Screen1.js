import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useRegistrationContext } from './RegistrationContext';

const Screen1 = ({ navigation }) => {
  const { registration, setRegistration } = useRegistrationContext();
  const [newRegistration, setNewRegistration] = useState('');
  const [newName, setNewName] = useState('');

  const updateValues = () => {
    setRegistration({
      registrationNumber: newRegistration,
      name: newName,
    });

    navigation.navigate('Screen2');
  };

  return (
    <View>
      <TextInput
        placeholder="Enter Registration Number"
        value={newRegistration}
        onChangeText={setNewRegistration}
      />
      <TextInput placeholder="Enter Name" value={newName} onChangeText={setNewName} />
      <Button title="Update Values" onPress={updateValues} />
    </View>
  );
};

export default Screen1;
