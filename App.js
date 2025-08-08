import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function BmiCalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [status, setStatus] = useState('');

  const calculateBmi = () => {
    const heightInMeters = height / 100;
    const calculatedBmi = weight / (heightInMeters * heightInMeters);
    setBmi(calculatedBmi.toFixed(2));

    if (calculatedBmi < 18.5) {
      setStatus('Abaixo do Peso');
    } else if (calculatedBmi < 25) {
      setStatus('Peso Ideal');
    } else if (calculatedBmi < 30) {
      setStatus('Levemente Acima Do Peso');
    } else if (calculatedBmi < 35) {
      setStatus('Obesidade Grau I');
    } else if (calculatedBmi < 40) {
      setStatus('Obesidade Severa');
    } else if (calculatedBmi >= 40) {
      setStatus('Obesidade Mórbida');
    }
  };
  function limpar() {
    setHeight('');
    setWeight('');
    setBmi('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CALCULADORA DE IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        placeholderTextColor="black"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        placeholderTextColor="black"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <View style={styles.botoes}>
        <TouchableOpacity style={styles.button} onPress={calculateBmi}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={limpar}>
          <Text style={styles.buttonText}>LIMPAR</Text>
        </TouchableOpacity>
      </View>
      {bmi ? (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>Seu IMC é: {bmi}</Text>
          <Text style={styles.result2}>{status}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  input: {
    width: '95%',
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    backgroundColor: 'blue',
    width: '40%',
    height: '100%',
    borderRadius: 40,
    marginTop: 30,
    marginRight: 20,
    marginLeft: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  result: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 30,
    fontWeight: 'bold',
  },
  result2: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  botoes: {
    flexDirection: 'row',
    height: '7%',
    justifyContent: 'center',
  },
});
