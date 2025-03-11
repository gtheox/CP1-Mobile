import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

const CalculoPreco = ({ PrecoOriginal, Porcentagem }) => {
  if (PrecoOriginal && Porcentagem) {
    const ValorAdicional = (PrecoOriginal * Porcentagem) / 100;
    const NovoPreco = PrecoOriginal + ValorAdicional;

    return (
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Valor Original: R$ {PrecoOriginal.toFixed(2)}</Text>
        <Text style={styles.resultText}>Aumento: {Porcentagem}%</Text>
        <Text style={styles.resultText}>Valor do Aumento: R$ {ValorAdicional.toFixed(2)}</Text>
        <Text style={styles.resultText}>Novo Valor: R$ {NovoPreco.toFixed(2)}</Text>
      </View>
    );
  }
  return <Text style={styles.resultText}>Preencha todos os campos para ver o resultado.</Text>;
};


const App = () => {
  const [NomeProduto, setNomeProduto] = useState('');
  const [PrecoOriginal, setPrecoOriginal] = useState('');
  const [Porcentagem, setPorcentagem] = useState('');
  const [Resultado, setResultado] = useState(false);


  const Calcular = () => {
    if (!NomeProduto || !PrecoOriginal || !Porcentagem) {
      Alert.alert('Erro', 'Todos os campos devem ser preenchidos!');
      return;
    }

    setResultado(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Aumento de Preço</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={NomeProduto}
        onChangeText={setNomeProduto}
      />

      <TextInput
        style={styles.input}
        placeholder="Valor Original"
        value={PrecoOriginal}
        onChangeText={setPrecoOriginal}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Porcentagem de Aumento"
        value={Porcentagem}
        onChangeText={setPorcentagem}
        keyboardType="numeric"
      />

      <Button title="Calcular" onPress={Calcular} color="#3498db" />

      {Resultado && (
        <CalculoPreco
          PrecoOriginal={parseFloat(PrecoOriginal)}
          Porcentagem={parseFloat(Porcentagem)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#3498db',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  resultContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#2ecc71',
    borderRadius: 8,
    width: '100%',
  },
  resultText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
});

export default App;