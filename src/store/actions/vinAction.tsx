//Fetch Post
import axios from 'axios';

export const VinAction = () => {
    return async (dispatch: any) => {
        await axios.get('./mock_data/vin_data.json')
            .then((allVin) => {
                dispatch(fetchVinSuccess(allVin.data));
            })
            .catch((err) => {
                dispatch(fetchVinFailed(err));
            })

    }
}

export const fetchVinSuccess = (vins: any) => {
    return {
        type: 'Fetch_VIN_Success',
        vins: vins
    }
}

export const fetchVinFailed = (error: any) => {
    // console.log('failedddfetchPostsFailed', error)
    return {
        type: 'Fetch_VIN_Failed',
        error
    }
}


export const scanNextVINIdAction = (vinId: any) => {
    return (dispatch: any) => {
        dispatch(scanNextVINIdSuccess(vinId))
    }
}

export const scanNextVINIdSuccess = (vinId: any) => {
    return {
        type: 'scan_Next_VIN_Id_Success',
        vinId: vinId
    }
}

export const scanNextVINIdSuccessFailed = (error: any) => {
    return {
        type: 'scan_Next_VIN_Id_Failed',
        error
    }
}

export const changeVINStatus = (vinId: string, status:string, statusLabel:string) => {
    return (dispatch: any) => {
        dispatch(changeVINStatusSuccess(vinId, status, statusLabel))
    }
}

export const changeVINStatusSuccess = (vinId: string, status:string, statusLabel:string) => {
    return {
        type: 'change_VIN_Status_Success',
        vinId: vinId,
        status:status,
        statusLabel:statusLabel
    }
}

export const changeVINStatusFailed = (error: any) => {
    return {
        type: 'change_VIN_Status_Failed',
        error
    }
}

export const setElementAction = (element: string) => {
    console.log("element inside action", element);
    return (dispatch: any) => {
        dispatch(setElementSuccess(element))
    }
}

export const setElementSuccess = (element: string) => {
    console.log('element action', element);
    return {
        type: 'Set_Element_Success',
        element: element,
    }
}

export const setElementFailed = (error: any) => {
    return {
        type: 'Set_Element_Failed',
        error
    }
}