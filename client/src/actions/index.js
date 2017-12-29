import axios from 'axios';
import { FETCH_USER, HANDLE_TOKEN } from "./types";


// The function 'fetchUser' is returning a promise function with a
// dispatch parameter
export const fetchUser = () => async dispatch => {
        const res = await axios.get('api/current_user');
        dispatch(
            {
                type: FETCH_USER,
                payload: res.data
            }
        )
    };

export const handleToken = token => async dispatch => {
    const res = await axios.post('/api/stripe', token);
    dispatch(
        {
            type: HANDLE_TOKEN,
            payload: res.data
        }
    )
};
