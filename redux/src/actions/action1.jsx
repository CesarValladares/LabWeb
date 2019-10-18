export const action1 = (event) => dispatch => {
    dispatch({
        type: 'ACTION1',
        payload: event
    })
}