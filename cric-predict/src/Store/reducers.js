const initialState ={
    group : null,
    leagues : []
}

const reducer = (state=initialState, action) => {
    switch(action.type)
    {
        case('SET_ACTIVE_GROUP'):
            return {
                ...state,
                group: action.group
            }
        case('SET_GROUP_LEAGUES'):
            return {
                ...state,
                leagues: action.leagues
            }
    }
    return state;
}

export default reducer;