const initialState = {
    isAuthenticated: false,
};

const AuthenticationReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'setIsAuthenticated':
            return {
                ...state,
                isAuthenticated: action.isAuthenticated
            }
        default:
            return state;
    }
};

export default AuthenticationReducer;
