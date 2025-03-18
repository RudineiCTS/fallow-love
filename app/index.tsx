import { Stack, Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '~/components/Button';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerShown: false }} />
      <ScreenContent path="app/index.tsx" title="Home">
        <View style={styles.content}>
          <Text style={styles.title}>DESCUBRA O RITMO PERFEITO DO SEU RELACIONAMENTO!</Text>
          <Text style={styles.description}>Entre no ritmo do amor! 💕</Text>
          <Text style={styles.description}>
            Acompanhe o ciclo da sua parceira de forma leve e divertida, fortalecendo ainda mais a
            conexão entre vocês.
          </Text>
        </View>
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details" styleCustom={styleButton.button} />
        </Link>
      </ScreenContent>
    </>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 'auto',
    marginHorizontal: 'auto',
  },
  description: {
    fontSize: 16,
    paddingHorizontal: 'auto',
    marginHorizontal: 'auto',
    textAlign: 'left',
    width: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    paddingHorizontal: 5,
    gap: 10,
    width: '90%',
    maxWidth: '90%',
  },
});

export const styleButton = StyleSheet.create({
  button: {
    marginBottom: 20, // Ajustado para um valor numérico válido
  },
});
