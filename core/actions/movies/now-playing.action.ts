import { movieApi } from '@/core/api/movie-api';
import { MovieDBMoviesResponse } from '@/infrastructure/interfaces/moviedb-response';

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>('/now_playing');

    return data;
  } catch (error) {
    console.log(error);
    throw 'Cannot load now playing movies';
  }
};
