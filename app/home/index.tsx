import MainSlideshow from '@/presentation/components/MainSlideshow';
import MovieHorizontalList from '@/presentation/components/MovieHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();

  if (nowPlayingQuery.isLoading)
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="mb-2 px-4 text-3xl font-bold">MoviesApp</Text>

        {/* Carousel */}
        <MainSlideshow movies={nowPlayingQuery?.data?.pages.flat() ?? []} />

        {/* Popular */}
        <MovieHorizontalList
          movies={popularQuery?.data?.pages.flat() ?? []}
          title="Populares"
          className="mb-5"
          loadNextPage={popularQuery.fetchNextPage}
        />

        {/* Top Rated */}
        <MovieHorizontalList
          movies={topRatedQuery?.data?.pages.flat() ?? []}
          title="Mejor Calificadas"
          className="mb-5"
          loadNextPage={topRatedQuery.fetchNextPage}
        />

        {/* Upcoming */}
        <MovieHorizontalList
          movies={upcomingQuery?.data?.pages.flat() ?? []}
          title="Próximamente"
          className="mb-5"
          loadNextPage={upcomingQuery.fetchNextPage}
        />
      </View>
    </ScrollView>
  );
}
