import LottieView from 'lottie-react-native';
import { Dispatch, SetStateAction } from 'react';

interface AnimationSplashType {
  setIsLoadingValue: Dispatch<SetStateAction<boolean>>;
}

export default function AnimationSplash({ setIsLoadingValue }: AnimationSplashType) {
  return (
    <LottieView
      source={require('../assets/animated/loading.json')}
      autoPlay
      style={{ flex: 1 }}
      loop={false}
      onAnimationFinish={() => setIsLoadingValue(false)}
      resizeMode="cover"
    />
  );
}
