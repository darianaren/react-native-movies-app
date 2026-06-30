import '../global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Text } from 'react-native';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Text>Hola mundp</Text>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
