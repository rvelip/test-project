
const initialState = {
    vins: []
};

const VinReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'Fetch_VIN_Success':
            return {
                vins: action.vins
            }
        case 'Fetch_VIN_Failed':
            return {
                vins: []
            }
        default:
            return state;
    }
};

export default VinReducer;
