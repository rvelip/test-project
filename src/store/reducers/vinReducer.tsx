
const initialState = {
    vins: [],
    scanNextVINId: '',
    element: 'scan_input',
};

const VinReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'Fetch_VIN_Success':
            return {
                ...state,
                vins: action.vins,
            }
        case 'Fetch_VIN_Failed':
            return {
                ...state,
                vins: [],
            }
        case 'scan_Next_VIN_Id_Success':
            return {
                ...state,
                scanNextVINId: action.vinId
            }
        case 'scan_Next_VIN_Id_Failed':
            return {
                ...state,
                scanNextVINId: ''
            }
        case 'change_VIN_Status_Success':
            const index = state.vins.findIndex((item: any) => item.vin_id === action.vinId)
            let arr = [...state.vins]
            arr[index] = Object.assign({}, arr[index], { status: action.status, status_label: action.statusLabel })
            return {
                ...state,
                vins: arr
            }
        case 'change_VIN_Status_Failed':
            return {
                ...state,
                scanNextVINId: ''
            }
        case 'Set_Element_Success':
            return {
                ...state,
                element: action.element
            }
        default:
            return state;
    }
};

export default VinReducer;
