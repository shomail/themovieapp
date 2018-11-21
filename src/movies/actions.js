export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const RESET_MOVIE = 'RESET_MOVIE';

// action creator is just a function which returns an object

// thunk is a function which returns a function

export function getMovies() {
  return async function makecall(dispatch) {
    const res = await fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=8be073837c1de6e9c10ad7d98b70aa3c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
    );

    const movies = await res.json();

    return dispatch({
      type: 'GET_MOVIES',
      data: movies.results,
    });
  };
}

export function getMovie(id) {
  return async function makecall(dispatch) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8be073837c1de6e9c10ad7d98b70aa3c&language=en-US`,
    );

    const movie = await res.json();

    return dispatch({
      type: 'GET_MOVIE',
      data: movie,
    });
  };
}

export function resetMovie() {
  return {
    type: 'RESET_MOVIE',
  };
}
