export const setRoute = (routes: any) => {
    return (dispatch: any) => {
        dispatch(setRouteSuccess(routes))
    }
}

export const setRouteSuccess = (routes: any) => {
    return {
        type: 'setRoutes',
        routes: routes
    }
}