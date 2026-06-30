import '../global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Text } from 'react-native';
import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';

export default function RootLayout() {
  nowPlayingAction();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Text>Hola mundp</Text>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
