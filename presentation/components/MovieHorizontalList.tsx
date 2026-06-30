import { View, Text, FlatList, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { Movie } from '@/infrastructure/interfaces/movie.interface';
import MoviePoster from './MoviePoster';
import { useEffect, useRef } from 'react';

interface Props {
  title?: string;
  movies: Movie[];
  className?: string;
  loadNextPage?: VoidFunction;
}

const MovieHorizontalList = ({ title, movies, className, loadNextPage }: Props) => {
  const isLoading = useRef(false);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    loadNextPage && loadNextPage();
  };

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  return (
    <View className={` ${className}`}>
      {title ? <Text className="mb-2 px-4 text-3xl font-bold">{title}</Text> : null}

      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}
        onScroll={onScroll}
      />
    </View>
  );
};
export default MovieHorizontalList;
