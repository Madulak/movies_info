import axios from 'axios';
import { api, BASE_URL } from '../config'

export const GET_UPCOMING_MOVIES = 'GET_UPCOMING_MOVIES';
export const GET_DETAIL_MOVIE = 'GET_DETAIL_MOVIE';
export const GET_TRAILER = 'GET_TRAILER';
export const GET_SEARCH = 'GET_SEARCH';
export const GET_CREDIT = 'GET_CREDIT';

const upcomingUrl = `${BASE_URL}/movie/latest?api_key=${api}&language=en-US&page=1`
const comedy = 'https://api.themoviedb.org/3/search/multi?api_key=0ce3f1e2d7dcac36ca9b725dbf91075b&language=en-US&query=comedy&page=1&include_adult=false';
const movie_url = `${BASE_URL}/movie/`


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

export const get_detail_movie = (id) => {

    return async dispatch => {
        let response;
        try {
            response = await axios.get(movie_url+id+'?api_key=' +api);
            console.log('[RESULTS] ', response.data)
        } catch (error) {
            console.log('[ERROR] ', error);
            throw error;
        }
        dispatch({type: GET_DETAIL_MOVIE, single_movie: response.data})
    }
}

export const get_trailer = (id) => {

    return async dispatch => {
        let response;
        try {
            response = await axios.get(`${movie_url}${id}/videos?api_key=${api}`)
            console.log('[TRAILER URL] ', response.data);
        } catch (error) {
            console.log('{ERROR}', error);
            throw error;
        }

        dispatch({type: GET_TRAILER, trailer: response.data})
    }
}

export const get_search = (query) => {

    return async dispatch => {
        let response;
        try {
            response = await axios.get(`${BASE_URL}/search/movie?api_key=${api}&query=${query}&page=1&include_adult=false`);
            console.log('[SEARCH DATA] ', response.data);
        } catch (error) {
            console.log('[ERROR] ', error);
            throw error;
        }
        dispatch({type: GET_SEARCH, search_movies: response.data.results})
    }
}

export const get_credit = (id) => {

    return async dispatch => {
        let response;
        try {
            response = await axios.get(`${movie_url}${id}/credits?api_key=${api}`)
        } catch (error) {
            console.log(error);
            throw error;
        }
        dispatch({type: GET_CREDIT, cast: response.data.cast})
    }
} 