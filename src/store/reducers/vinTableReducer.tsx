
const initialState = {
    vin_table_data: []
};

const VinTableReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'Fetch_VIN_Table_Success':
            return {
                vin_table_data: action.vin_table_data
            }
        case 'Fetch_VIN_Table_Failed':
            return {
                vin_table_data: []
            }
        default:
            return state;
    }
};

export default VinTableReducer;
