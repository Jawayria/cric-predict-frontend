import axios from 'axios';

export const SET_ACTIVE_GROUP = 'SET_ACTIVE_GROUP';
export const SET_GROUP_LEAGUES = 'SET_GROUP_LEAGUES';

export const setActiveGroup = (group_obj) => {
    return {
        type: SET_ACTIVE_GROUP,
        group: group_obj
        };
}

export const setGroupLeagues = () => {
    return async function (dispatch, getState) {
        const response = await axios.get('http://localhost:8000/api/contest/group_leagues/'+getState().group.id+"/",{
        headers: {
        'Authorization': "Bearer "+window.localStorage.getItem('access_token')
        }
    }).then(res => {
        dispatch(saveResult(res.data))
    });
    }
}

export const saveResult = (res) => {
    return {
        type: SET_GROUP_LEAGUES,
        leagues: res
    }
}