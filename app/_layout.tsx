import { Stack } from 'expo-router';
import { useState } from 'react';
import AnimationSplash from './splash_intro';

export default function Layout() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  setTimeout(() => {
    console.log('carregando');
  }, 1000);

  return isLoading ? <AnimationSplash setIsLoadingValue={setIsLoading} /> : <Stack />;
}
