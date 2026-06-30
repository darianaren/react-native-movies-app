import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function MovieScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>MovieScreen</Text>
    </View>
  );
}
