import axios from 'axios';

export const fetchProfileDetailsAction = (persona: string) => {//use this to make api call
    const team_member = { //remove this
        username: 'Ram',
        persona: 'team_member',
        location: 'long_beach',
        line: 'Production Line 1',
        shop: 'A1',
        stall: 'Stall 1'
    }
    const manager = { //remove this
        username: 'Pritam',
        persona: 'manager',
        location: 'long_beach',
        line: 'Production Line 1',
        shop: 'A1',
        stall: 'Stall 1'
    }
    return async (dispatch: any) => {
        await axios.get('./mock_data/profile_data.json')
            .then((profileResponse) => {
                // console.log(profileResponse)
                // dispatch(fetchProfileDetailsSuccess(profileResponse?.data));

                // REMOVE THIS
                if(persona === 'team_member') // remove this 
                {
                    dispatch(fetchProfileDetailsSuccess(team_member));
                } else { // remove this 
                    dispatch(fetchProfileDetailsSuccess(manager));
                }
                // REMOVE END
            })
            .catch((err) => {
                dispatch(fetchProfileDetailsFailed(err));
            })
    }
}

export const fetchProfileDetailsSuccess = (profileData: any) => {
    return {
        type: 'fetch_profile_data_success',
        profileData: profileData
    }
}

export const fetchProfileDetailsFailed = (error: any) => {
    return {
        type: 'fetch_profile_data_failed',
        error
    }
}