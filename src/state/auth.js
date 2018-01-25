import {auth} from '../firebase'

const SET_USER = 'auth/SET_USER'


const setUser = (user) => ({
    type: SET_USER,
    userData: user
})

export const initAuth = () => (dispatch, getState) => {
    auth.onAuthStateChanged((user)=>{
        // if not logged in user is null!! //
        dispatch(setUser(user))
    })
}

const initialState = {
    user: null
}

export default (state = initialState, action) => {
    switch (action.type){
        case SET_USER
        default:
            return state
    }

}