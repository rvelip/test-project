//Fetch Post
import axios from 'axios';
import vin_data from '../../mock/vin_data.json';

export const LoginAction = () => {

    return async (dispatch: any) => {
        await fetch(JSON.stringify(vin_data))
            .then((response: any) => {
                console.clear();
                console.log("----------------------");
                // const json_data = await response.json();
                console.log("response ----------------------> ", response);
                dispatch(fetchPostsSuccess(response));
            })
            .catch((err) => {
                dispatch(fetchPostsFailed(err));
            })
    }
}

export const fetchPostsSuccess = (posts: any) => {
    // console.log('fetchPostsSuccess', posts)
    return {
        type: 'Fetch_Posts_Success',
        posts: posts
    }
}

export const fetchPostsFailed = (error: any) => {
    // console.log('failedddfetchPostsFailed', error)
    return {
        type: 'Fetch_Posts_Failed',
        error
    }
}
