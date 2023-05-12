//Fetch Post
import axios from 'axios';

export const VinTableAction = () => {

    return async (dispatch: any) => {
        await axios.get('./mock_data/vin_table.json')
        .then((allVin) => {
            dispatch(fetchVinTableSuccess(allVin.data));
            console.log('VinTable', allVin.data)
        })
        .catch((err) => {
            dispatch(fetchVinTableFailed(err));
        })

    }
}

export const fetchVinTableSuccess = (vin_table_data: any) => {
    return {
        type: 'Fetch_VIN_Table_Success',
        vin_table_data: vin_table_data
    }
}

export const fetchVinTableFailed = (error: any) => {
    // console.log('failedddfetchPostsFailed', error)
    return {
        type: 'Fetch_VIN_Table_Failed',
        error
    }
}
