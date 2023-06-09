export const resetAction = () => {
    return (dispatch: any) => {
        dispatch(resetSuccess())
    }
}
export const resetSuccess = () => {
    return {
        type: 'RESET',
    }
}
