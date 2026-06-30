import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';
import { popularMoviesAction } from '@/core/actions/movies/popular.action';
import { topRatedMoviesAction } from '@/core/actions/movies/top-rated';
import { upcomingMoviesAction } from '@/core/actions/movies/upcoming';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useMovies = () => {
  const nowPlayingQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', 'nowPlaying'],
    queryFn: ({ pageParam }) => nowPlayingAction({ page: pageParam }),
    staleTime: 1000 * 60 * 60 * 24, //24 hrs
    getNextPageParam: (_, pages) => pages.length + 1,
  });

  const popularQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', 'popular'],
    queryFn: ({ pageParam }) => popularMoviesAction({ page: pageParam }),
    staleTime: 1000 * 60 * 60 * 24, //24 hrs
    getNextPageParam: (_, pages) => pages.length + 1,
  });

  const topRatedQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', 'top-rated'],
    queryFn: ({ pageParam }) => topRatedMoviesAction({ page: pageParam }),
    staleTime: 1000 * 60 * 60 * 24, //24 hrs
    getNextPageParam: (_, pages) => pages.length + 1,
  });

  const upcomingQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', 'upcoming'],
    queryFn: ({ pageParam }) => upcomingMoviesAction({ page: pageParam }),
    staleTime: 1000 * 60 * 60 * 24, //24 hrs
    getNextPageParam: (_, pages) => pages.length + 1,
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};
