import { Stack, useLocalSearchParams } from 'expo-router';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import StreetIcon from '../assets/street-icon.svg';

import { Button } from '~/components/Button';

export default function Details() {
  return (
    <>
      <Stack.Screen options={{ title: 'Details', headerShown: false }} />
      <ImageBackground
        source={require('../assets/splash-bg2.png')}
        resizeMode="cover"
        style={styles.container}>
        <View style={styles.containerHeader}>
          {/* Título */}
          <Text style={styles.title}>
            <Text style={styles.bold}>BUSCANDO{'\n'}INFORMAÇÃO</Text>
          </Text>
        </View>
        <ScrollView contentContainerStyle={styles.form}>
          {/* Perguntas */}
          <View style={styles.questionBox}>
            <Text style={styles.question}>Qual foi o primeiro dia da sua última menstruação?</Text>
            <TextInput style={styles.input} placeholder="Digite a data..." />
          </View>

          <View style={styles.questionBox}>
            <Text style={styles.question}>Quanto tempo, em média, dura o seu ciclo menstrual?</Text>
            <TextInput style={styles.input} placeholder="Ex: 28 dias" keyboardType="numeric" />
          </View>

          <View style={styles.questionBox}>
            <Text style={styles.question}>Quantos dias, em média, você menstrua?</Text>
            <TextInput style={styles.input} placeholder="Ex: 5 dias" keyboardType="numeric" />
          </View>

          <View style={styles.questionBox}>
            <Text style={styles.question}>Gostaria de acompanhar sua fase fértil e ovulação?</Text>
            <TextInput style={styles.input} placeholder="Sim ou Não" />
          </View>
        </ScrollView>
        <Button title="Avançar" styleCustom={styles.button} />
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  containerHeader: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  streetIcon: {},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  bold: {
    fontWeight: 'bold',
  },
  form: {
    flexGrow: 1,
  },
  questionBox: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#FFC0CB',
    paddingBottom: 10,
  },
  question: {
    fontSize: 16,
    color: '#FF497C',
    fontWeight: '600',
  },
  input: {
    marginTop: 10,
    padding: 10,
    borderWidth: 0,
    borderColor: '#FFABC0',
    borderRadius: 5,
  },
  button: {
    alignSelf: 'center',
  },
});
