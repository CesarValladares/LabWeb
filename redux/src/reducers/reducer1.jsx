export default (state = {}, action) => {

    switch(action.type){

        case 'ACTION1':
            return{
                result: action.payload
            }
        case 'EDIT':
            return{
                users: action.users
            }
        default: 
            return state
    }
}