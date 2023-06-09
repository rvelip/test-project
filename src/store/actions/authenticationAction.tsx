export const setIsAuthenticated = (isAuthenticated: boolean) => {
    return (dispatch: any) => {
        dispatch(setIsAuthenticatedSuccess(isAuthenticated))
    }
}

export const setIsAuthenticatedSuccess = (isAuthenticated: boolean) => {
    return {
        type: 'setIsAuthenticated',
        isAuthenticated: isAuthenticated
    }
}

export const logoutAction = () => {
    return (dispatch: any) => {
        dispatch(logoutSuccess())
    }
}
export const logoutSuccess = () => {
    return {
        type: 'logoutSuccess',
    }
}
