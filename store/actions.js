import axios from 'axios';
import { api } from '../config'

export const GET_UPCOMING_MOVIES = 'GET_UPCOMING_MOVIES';

const upcomingUrl = `https://api.themoviedb.org/3/movie/latest?api_key=${api}&language=en-US&page=1`
const comedy = 'https://api.themoviedb.org/3/search/multi?api_key=0ce3f1e2d7dcac36ca9b725dbf91075b&language=en-US&query=comedy&page=1&include_adult=false'

export const get_upcoming_movies = () => {

    return async dispatch => {
        let response;
        try {
            response = await axios.get(comedy);
            console.log('[RESPONSE] ',response.data.results[0]);
        } catch (error) {
            console.log(error);
            throw error;
        }

        dispatch({type: GET_UPCOMING_MOVIES, upcomingMovies: response.data.results})
    }
}