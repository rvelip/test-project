
const initialState = {
    posts: []
};

const postReducer = (state = initialState, action: any) => {
    console.log('postReduceraction.posts', action)
    switch (action.type) {
        case 'Fetch_Posts_Success':

            return {
                posts: action.posts
            }

        case 'Fetch_Posts_Failed':

            return {
                posts: []
            }

        default:
            return state;
    }
};

export default postReducer;
