import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  function calculate() {
    if (weight === 0 || height === 0 || weight === '' || height === '') {
      alert('Please, input your weight and height')
    }
    else {
      const result = weight.replace(',','.') / (height.replace(',','.') ** 2);
      setBmi(result.toFixed(1));
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Weight: </Text>
      <TextInput style={styles.field} keyboardType='numeric' onChangeText={text=>setWeight(text)}/>
      <Text style={styles.field} >Height: </Text>
      <TextInput keyboardType='decimal-pad'style={styles.field} onChangeText={text=>setHeight(text)}/>
      <Text style={styles.field}>BMI: </Text>
      <Text style={styles.field}>{bmi}</Text>
      <Button onPress={calculate} title='Calculate BMI'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  field: {
    marginBottom: 10,
  },
});
