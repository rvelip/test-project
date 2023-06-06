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