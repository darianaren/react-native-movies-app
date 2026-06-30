import MainSlideshow from '@/presentation/components/MainSlideshow';
import MovieHorizontalList from '@/presentation/components/MovieHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies';
import { View, Text, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery } = useMovies();

  if (nowPlayingQuery.isLoading)
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );

  return (
    <View className="mt-2" style={{ paddingTop: safeArea.top }}>
      <Text className="mb-2 px-4 text-3xl font-bold">MoviesApp</Text>

      {/* Carousel */}
      <MainSlideshow movies={nowPlayingQuery?.data ?? []} />

      {/* Popular */}
      <MovieHorizontalList movies={popularQuery.data ?? []} title="Populares" />
    </View>
  );
}
