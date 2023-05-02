//Fetch Post
import axios from 'axios';

export const fetchPosts = () => {

    return async (dispatch: any) => {
        await axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((allPosts) => {
                dispatch(fetchPostsSuccess(allPosts?.data));
            })
            .catch((err) => {
                dispatch(fetchPostsFailed(err));
            })


    }
}

export const fetchPostsSuccess = (posts: any) => {
    console.log('fetchPostsSuccess', posts)
    return {
        type: 'Fetch_Posts_Success',
        posts: posts
    }
}

export const fetchPostsFailed = (error: any) => {
    console.log('failedddfetchPostsFailed', error)
    return {
        type: 'Fetch_Posts_Failed',
        error
    }
}
