// export const setRoute = (persona: string) => {
//     return (dispatch: any) => {
//         dispatch(setRouteSuccess(persona))
//     }
// }

// export const setRouteSuccess = (persona: string) => {
//     return {
//         type: 'setRoutes',
//         persona: persona
//     }
// }

export const updateTabAction = (path: string, persona: string) => {
    return (dispatch: any) => {
        dispatch(updateTabSuccess(path, persona))
    }
}

export const updateTabSuccess = (path: string, persona: string) => {
    return {
        type: 'update_tab_success',
        path: path,
        persona: persona
    }
}

