const redux = require("redux")
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware
const thunkmiddleware = require('redux-thunk').default
const axios = require('axios')

const initialState = {
    loading: false,
    users: [],
    error: ""
}

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

const fetchUsersRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = users => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USER_FAILURE: 
            return{
                loading: false,
                users: [],
                error: action.payload
            }
    }
}


const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            const users = res.data.map(user => user.id)
            dispatch(fetchUserSuccess(users))
        })
        .catch(err => {
            dispatch(fetchUserFailure(err))
        })
    }
}


const store = createStore(reducer, applyMiddleware(thunkmiddleware))
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUsers)