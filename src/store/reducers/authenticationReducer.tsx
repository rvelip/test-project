const initialState = {
    isAuthenticated: false,
};

const AuthenticationReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'setIsAuthenticated':
            return {
                isAuthenticated: action.isAuthenticated
            }
        default:
            console.log('defalutsetIsAuthenticated')
            return state
    }
};

export default AuthenticationReducer;
