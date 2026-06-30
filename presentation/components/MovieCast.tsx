import { Cast } from '@/infrastructure/interfaces/cast';
import { View, Text, FlatList } from 'react-native';
import { ActorCard } from './ActorCard';

interface Props {
  cast: Cast[];
}

const MovieCast = ({ cast }: Props) => {
  return (
    <View className="mb-20 mt-5">
      <Text className="px-5 text-2xl font-bold">Actores</Text>

      <FlatList
        data={cast}
        keyExtractor={(item, i) => `${item.id.toString()}-${i}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  );
};
export default MovieCast;
