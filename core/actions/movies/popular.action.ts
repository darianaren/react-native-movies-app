import { movieApi } from '@/core/api/movie-api';
import { Options } from '@/infrastructure/interfaces/actions.interface';
import { MovieDBMoviesResponse } from '@/infrastructure/interfaces/moviedb-response';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

export const popularMoviesAction = async ({ page = 1, limit = 10 }: Options) => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>('/popular', {
      params: { page, limit },
    });

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw 'Cannot load population movies';
  }
};
