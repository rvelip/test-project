
const initialState = {
    vins: [],
    scanNextVINId: ''
};

const VinReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'Fetch_VIN_Success':
            return {
                vins: action.vins,
                scanNextVINId: ''
            }
        case 'Fetch_VIN_Failed':
            return {
                vins: [],
                scanNextVINId: ''
            }
        case 'scan_Next_VIN_Id_Success':
            return {
                ...state,
                scanNextVINId: action.vinId
            }
        case 'scan_Next_VIN_Id_Failed':
            return {
                scanNextVINId: ''
            }
        case 'change_VIN_Status_Success':
            // console.log(' state.vins', state.vins, action.vinId, typeof action.vinId)
            const index = state.vins.findIndex((item: any) => item.vin_id == action.vinId)
            let arr = [...state.vins]
            arr[index] = Object.assign({}, arr[index], { status: action.status, status_label: action.statusLabel })
            return {
                ...state,
                vins: arr
            }
        case 'change_VIN_Status_Failed':
            return {
                scanNextVINId: ''
            }
        default:
            return state;
    }
};

export default VinReducer;
