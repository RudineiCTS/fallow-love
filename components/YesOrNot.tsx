import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface typeValueIndicate {
  value: 1 | 0;
}
export function YesOrNot() {
  const [value, setValue] = useState<typeValueIndicate>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[value === 1 ? styles.isActive : styles.TouchableYes]}
        onPress={() => setValue(1)}>
        <Text>SIM, Quero saber!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[value === 0 ? styles.isActive : styles.TouchableYes]}
        onPress={() => setValue(0)}>
        <Text>Não, Obrigado</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    justifyContent: 'space-around',
    paddingVertical: 20,
    alignItems: 'center',
  },
  TouchableYes: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#FC5568',
  },
  isActive: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#FC5568',
    backgroundColor: '#FFDEDE',
  },
});
