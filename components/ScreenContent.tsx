import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import LoveIcon from '../assets/love-icon.svg';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
  background?: string;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <ImageBackground
      source={require('../assets/splash-bg.png')}
      resizeMode="cover"
      style={styles.container}>
      <LoveIcon width={280} height={230} style={styles.icon} />
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    marginTop: 30,
  },
});
