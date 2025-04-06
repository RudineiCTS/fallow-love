import { Link, Stack } from 'expo-router';
import { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import MaskInput, { Masks } from 'react-native-mask-input';

import { Button } from '~/components/Button';
import { YesOrNot } from '~/components/YesOrNot';

interface DumObjType {
  firstDay: string;
  timeDuration: string;
  howMuchDay: string;
}

export default function Details() {
  const [dum, setDum] = useState<DumObjType>();

  function atualizarDados(key: string, value: any) {
    setDum((prevUsuario: any) => ({
      ...prevUsuario,
      [key]: value,
    }));
  }

  function handleTakeInfo() {}

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
            <Text style={styles.bold}>Pergunte a sua {'\n'}parceira</Text>
          </Text>
        </View>
        <ScrollView contentContainerStyle={styles.form}>
          {/* Perguntas */}
          <View style={styles.questionBox}>
            <Text style={styles.question}>Qual foi o primeiro dia da sua última menstruação?</Text>
            <MaskInput
              value={dum?.firstDay ?? ''}
              mask={Masks.DATE_DDMMYYYY}
              onChangeText={(e) => atualizarDados('firstDay', e)}
              style={styles.input}
              placeholder="Digite a data..."
              keyboardType="number-pad"
            />
          </View>

          <View style={styles.questionBox}>
            <Text style={styles.question}>Quanto tempo, em média, dura o seu ciclo menstrual?</Text>
            <MaskInput
              style={styles.input}
              placeholder="Ex: 28 dias"
              keyboardType="numeric"
              onChangeText={(e) => atualizarDados('timeDuration', e)}
              value={dum?.timeDuration}
            />
          </View>

          <View style={styles.questionBox}>
            <Text style={styles.question}>Quantos dias, em média, você menstrua?</Text>
            <MaskInput
              style={styles.input}
              placeholder="Ex: 5 dias"
              keyboardType="numeric"
              value={dum?.howMuchDay}
              onChangeText={(e) => atualizarDados('howMuchDay', e)}
            />
          </View>

          <View style={styles.questionBox}>
            <Text style={styles.question}>Gostaria de acompanhar sua fase fértil e ovulação?</Text>
            {/* <TextInput style={styles.input} placeholder="Sim ou Não" /> */}
            <YesOrNot />
          </View>
        </ScrollView>
        <Link href={{ pathname: '/profile', params: { name: 'Dan' } }} asChild>
          <Button title="Avançar" styleCustom={styles.button} />
        </Link>
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
