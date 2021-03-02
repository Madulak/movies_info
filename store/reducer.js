import { GET_UPCOMING_MOVIES } from "./actions";

const initialState = {
    upcomingMovies: null,
}

const Reducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_UPCOMING_MOVIES:
            return {
                ...state,
                upcomingMovies: action.upcomingMovies
            }

        default:
            return state;
    }
}

export default Reducer;