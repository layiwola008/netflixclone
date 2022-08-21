// The reducer modifies our data layer based on dispatched action
const MovieReducer = (state, action) => {
  switch (action.type) {
    case "GET_MOVIES_START":
      return {
        movies: [],
        iseFetching: true,
        error: false,
      };
    case "GET_MOVIES_SUCCESS":
      return {
        movies: action.payload,
        iseFetching: false,
        error: false,
      };
    case "GET_MOVIES_FAILURE":
      return {
        movies: [],
        iseFetching: false,
        error: true,
      };
    case "CREATE_MOVIE_START":
      return {
        ...state,
        iseFetching: true,
        error: false,
      };
    case "CREATE_MOVIE_SUCCESS":
      return {
        movies: [...state.movies, action.payload],
        iseFetching: false,
        error: false,
      };
    case "CREATE_MOVIE_FAILURE":
      return {
        ...state,
        iseFetching: false,
        error: true,
      };
    case "UPDATE_MOVIE_START":
      return {
        ...state,
        iseFetching: true,
        error: false,
      };
    case "UPDATE_MOVIE_SUCCESS":
      return {
        movies: state.movies.map(
          (movie) => movie._id === action.payload._id && action.payload
        ),
        iseFetching: false,
        error: false,
      };
    case "UPDATE_MOVIE_FAILURE":
      return {
        ...state,
        iseFetching: false,
        error: true,
      };
    case "DELETE_MOVIE_START":
      return {
        ...state,
        iseFetching: true,
        error: false,
      };
    case "DELETE_MOVIE_SUCCESS":
      return {
        movies: state.movies.filter((movie) => movie._id !== action.payload),
        iseFetching: false,
        error: false,
      };
    case "DELETE_MOVIE_FAILURE":
      return {
        ...state,
        iseFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default MovieReducer;
