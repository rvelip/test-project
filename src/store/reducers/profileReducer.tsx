
const initialState = {
};

const ProfileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'fetch_profile_data_success':
            return {
                ...state,
                username: action.profileData.username,
                persona: action.profileData.persona,
                location: action.profileData.location,
                line: action.profileData.line,
                shop: action.profileData.shop,
                stall: action.profileData.stall
            }
        case 'Fetch_Users_Failed':
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
};

export default ProfileReducer;
