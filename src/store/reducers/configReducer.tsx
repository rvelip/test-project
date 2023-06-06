const initialState = {
    routes: [],
};

const ConfigReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'setRoutes':
            return {
                ...state,
                routes: action.routes
            }
        default:
            return state;
    }
};

export default ConfigReducer;
