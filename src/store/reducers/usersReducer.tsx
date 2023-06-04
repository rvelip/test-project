
const initialState = {
    users: [],
    searchText: "",
    selectedUsers: [],
    removeId: ""
};

const UsersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'Fetch_Users_Success':
            return {
                ...state,
                users: action.users,
            }
        case 'Fetch_Users_Failed':
            return {
                ...state,
                users: [],
            }
        case 'search_text_Success':
            return {
                ...state,
                searchText: action.searchText
            }
        case 'selected_users_success':
            let newUserArr: any = [...state.selectedUsers, action.newUser];
            return {
                ...state,
                selectedUsers: newUserArr
            }
        case 'remove_item_id':
            return {
                ...state,
                removeId: action.id
            }
        case 'remove_users_success':
            let arr = state.selectedUsers.filter((item: any) => item.workdayId !== action.id)
            return {
                ...state,
                selectedUsers: arr
            }
        default:
            return state;
    }
};

export default UsersReducer;
