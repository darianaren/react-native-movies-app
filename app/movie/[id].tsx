import MovieCast from '@/presentation/components/MovieCast';
import MovieDescription from '@/presentation/components/MovieDescription';
import MovieHeader from '@/presentation/components/MovieHeader';
import { useMovie } from '@/presentation/hooks/useMovie';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  const { movieQuery, castQuery } = useMovie(+id);

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className="flex flex-1 items-center justify-center">
        <Text className="mb-4">Espere por favor</Text>
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }
  console.log(castQuery.data);
  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movieQuery.data.originalTitle}
        poster={movieQuery.data.poster}
        title={movieQuery.data.title}
      />

      <MovieDescription movie={movieQuery.data} />

      {/* Movie Cast */}
      <MovieCast cast={castQuery.data ?? []} />
    </ScrollView>
  );
};
export default MovieScreen;
