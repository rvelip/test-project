import axios from 'axios';

export const FetchUsersAction = (searchText: string) => {//use this to make api call
    return async (dispatch: any) => {
        await axios.get('./mock_data/users_data.json')
            .then((allUsers) => {
                dispatch(fetchUsersSuccess(allUsers?.data));
            })
            .catch((err) => {
                dispatch(fetchUsersFailed(err));
            })
    }
}

export const fetchUsersSuccess = (users: any) => {
    return {
        type: 'Fetch_Users_Success',
        users: users
    }
}

export const fetchUsersFailed = (error: any) => {
    return {
        type: 'Fetch_Users_Failed',
        error
    }
}

export const searchTextAction = (searchText: any) => {
    return (dispatch: any) => {
        dispatch(searchTextSuccess(searchText))
    }
}

export const searchTextSuccess = (searchText: any) => {
    return {
        type: 'search_text_Success',
        searchText: searchText
    }
}

export const selectedUserAction = (newUser: Object) => {
    return (dispatch: any) => {
        dispatch(selectedUserSuccess(newUser))
    }
}

export const selectedUserSuccess = (newUser: Object) => {
    return {
        type: 'selected_users_success',
        newUser: newUser
    }
}

export const removeItemId = (id: any) => {
    return (dispatch: any) => {
        dispatch(removeItemIdSuccess(id))
    }
}

export const removeItemIdSuccess = (id: any) => {
    return {
        type: 'remove_item_id',
        id: id
    }
}

export const removeUserAction = (id: any) => {
    return (dispatch: any) => {
        dispatch(removeUserSuccess(id))
    }
}

export const removeUserSuccess = (id: any) => {
    return {
        type: 'remove_users_success',
        id: id
    }
}
