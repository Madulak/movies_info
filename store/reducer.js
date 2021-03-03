import { GET_DETAIL_MOVIE, GET_SEARCH, GET_TRAILER, GET_UPCOMING_MOVIES } from "./actions";

const initialState = {
    upcomingMovies: null,
    single_movie: null,
    trailer: null,
    search_movies: null
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
            }

        default:
            return state;
    }
}

export default Reducer;