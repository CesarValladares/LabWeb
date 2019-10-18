var users = []

export const action_edit_data = (user) => dispatch => {
    console.log("EVENT", user)
    users.push(user)

    dispatch({
        type: 'EDIT',
        users
    })
}


