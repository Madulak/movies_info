import { GET_CREDIT, GET_DETAIL_MOVIE, GET_SEARCH, GET_TRAILER, GET_UPCOMING_MOVIES, REMOVE_DATA } from "./actions";

const initialState = {
    upcomingMovies: null,
    single_movie: null,
    trailer: null,
    search_movies: null,
    cast: null,
    total_results: null,
}

const Reducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_UPCOMING_MOVIES:
            return {
                ...state,
                upcomingMovies: action.upcomingMovies
            }

        case GET_DETAIL_MOVIE:
            return {
                ...state,
                single_movie: action.single_movie
            }
        
        case GET_TRAILER:
            return {
                ...state,
                trailer: action.trailer
            }

        case GET_SEARCH:
            return {
                ...state,
                search_movies: action.search_movies,
                total_results: action.total_results,
            }

        case GET_CREDIT:
            return {
                ...state,
                cast: action.cast
            }

        case REMOVE_DATA:
            return {
                ...state,
                single_movie: action.single_movie,
                trailer: action.trailer
            }

        default:
            return state;
    }
}

export default Reducer;