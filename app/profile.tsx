import { StyleSheet, Text, View } from 'react-native';

export function ProfilePage() {
  return (
    <View style={styles}>
      <Text>Ultima menstruação começou</Text>
      <Text> 15/12/2024</Text>

      <Text>O próximo período começará por volta de</Text>
      <Text> 15/12/2024.</Text>

      <Text>A fase fértil será entre</Text>
      <Text> 15/12/2024 - 15/12/2024.</Text>

      <Text>com ovulação estimada para</Text>
      <Text> 15/12/2024.</Text>

      <Text>A menstruação deverá durar de</Text>
      <Text> 15 - 19/12/2024 </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
