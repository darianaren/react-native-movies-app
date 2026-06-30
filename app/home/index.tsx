import { useMovies } from '@/presentation/hooks/useMovies';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  const { nowPlayingQuery } = useMovies();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>{JSON.stringify(nowPlayingQuery.data)}</Text>
    </View>
  );
}
