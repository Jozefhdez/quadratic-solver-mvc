import { ThemedText } from '@/components/themed-text';
import { calculateRoots } from '@/controllers/quadraticController';
import { QuadraticResult } from '@/models/quadraticEcuation';
import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function HomeScreen() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState<QuadraticResult | null>(null);

  const handleCalculate = () => {
    const roots = calculateRoots(a, b, c);
    
    if (roots.error) {
      Alert.alert('Error', roots.error);
      return;
    }
    
    setResult(roots);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText style={styles.title}>
        Ecuaciones de segundo grado
      </ThemedText>
      
      <ThemedText style={styles.equation}>
        ax^2 + bx + c = 0
      </ThemedText>

      <View style={styles.inputRow}>
        <ThemedText style={styles.label}>a:</ThemedText>
        <TextInput
          style={styles.input}
          value={a}
          onChangeText={setA}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputRow}>
        <ThemedText style={styles.label}>b:</ThemedText>
        <TextInput
          style={styles.input}
          value={b}
          onChangeText={setB}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputRow}>
        <ThemedText style={styles.label}>c:</ThemedText>
        <TextInput
          style={styles.input}
          value={c}
          onChangeText={setC}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCalculate}>
        <ThemedText style={styles.buttonText}>Resolver</ThemedText>
      </TouchableOpacity>

      {result && result.hasRealRoots && result.roots.length > 0 && (
        <View style={styles.results}>
          {result.roots.length === 1 ? (
            <View style={styles.resultRow}>
              <ThemedText style={styles.resultLabel}>Raíz:</ThemedText>
              <ThemedText style={styles.resultValue}>{result.roots[0].toFixed(2)}</ThemedText>
            </View>
          ) : (
            <>
              <View style={styles.resultRow}>
                <ThemedText style={styles.resultLabel}>Raíz 1:</ThemedText>
                <ThemedText style={styles.resultValue}>{result.roots[0].toFixed(2)}</ThemedText>
              </View>
              <View style={styles.resultRow}>
                <ThemedText style={styles.resultLabel}>Raíz 2:</ThemedText>
                <ThemedText style={styles.resultValue}>{result.roots[1].toFixed(2)}</ThemedText>
              </View>
            </>
          )}
        </View>
      )}

      {result && !result.hasRealRoots && result.complexRoots && (
        <View style={styles.results}>
          <View style={styles.resultRow}>
            <ThemedText style={styles.resultLabel}>Raíz 1:</ThemedText>
            <ThemedText style={styles.resultValue}>
              {result.complexRoots[0].real.toFixed(2)} {result.complexRoots[0].imaginary >= 0 ? '+' : ''} {result.complexRoots[0].imaginary.toFixed(2)}i
            </ThemedText>
          </View>
          <View style={styles.resultRow}>
            <ThemedText style={styles.resultLabel}>Raíz 2:</ThemedText>
            <ThemedText style={styles.resultValue}>
              {result.complexRoots[1].real.toFixed(2)} {result.complexRoots[1].imaginary >= 0 ? '+' : ''} {result.complexRoots[1].imaginary.toFixed(2)}i
            </ThemedText>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
  equation: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: 'black',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    marginRight: 15,
    minWidth: 20,
    color: 'black',
  },
  input: {
    flex: 1,
    borderWidth: 0.3,
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#2294f8ff',
    paddingVertical: 7,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  results: {
    marginTop: 10,
  },
  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  resultLabel: {
    fontSize: 18,
    marginRight: 15,
    minWidth: 60,
    color: 'black',
  },
  resultValue: {
    flex: 1,
    borderWidth: 0.3,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: 'black',
  },
});