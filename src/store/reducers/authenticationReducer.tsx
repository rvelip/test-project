
const initialState = {
    isAuthenticated: false,
};

const AuthenticationReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'setIsAuthenticated':
            return {
                isAuthenticated: action.isAuthenticated
            }
        case 'logoutSuccess':
            return {
                isAuthenticated: false,
                
            }
        default:
            return state
    }
};

export default AuthenticationReducer;
