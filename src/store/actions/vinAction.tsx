//Fetch Post
import axios from 'axios';

export const VinAction = () => {

    return async (dispatch: any) => {
        await axios.get('./mock_data/vin_data.json')
        .then((allVin) => {
            dispatch(fetchVinSuccess(allVin.data));
           console.log('VinData', allVin.data)
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
