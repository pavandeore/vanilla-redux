// const redux = require("redux");
// const createStore = redux.createStore

// const initialState = {
//     numOfCakes: 10
// }


// // Action
// const BUY_CAKE = "BUY_CAKE";

// function buyCake(){
//     return {
//         type: BUY_CAKE,
//         info: 'first action'
//     }
// }

// // Reducer
// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case BUY_CAKE: return{
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         default: return state
//     }
// }

// // Store
// const store = createStore(reducer);
// console.log("initial state ", store.getState())
// const unsubscribe = store.subscribe(() => console.log('udated', store.getState()))
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// unsubscribe();







// const redux = require("redux");
// const createStore = redux.createStore

// const initialState = {
//     numOfCakes: 10,
//     numOfIcecreams: 5,
// }


// // Action
// const BUY_CAKE = "BUY_CAKE";
// const BUY_ICECREAM = "BUY_ICECREAM";

// function buyCake(){
//     return {
//         type: BUY_CAKE,
//         info: 'first action'
//     }
// }
// function buyIcecream(){
//     return {
//         type: BUY_ICECREAM,
//         info: 'first action'
//     }
// }

// // Reducer
// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case BUY_CAKE: return{
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICECREAM: return{
//             ...state,
//             numOfIcecreams: state.numOfIcecreams - 1
//         }
//         default: return state
//     }
// }

// // Store
// const store = createStore(reducer);
// console.log("initial state ", store.getState())
// const unsubscribe = store.subscribe(() => console.log('udated', store.getState()))
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyIcecream())
// unsubscribe();






const redux = require("redux");
const reduxLogger = require("redux-logger")
const createStore = redux.createStore
const combineReducer = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const initialCakeState = {
    numOfCakes: 10,
}

const initialIcecreamState = {
    numOfIcecreams: 5,
}


// Action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'first action'
    }
}
function buyIcecream(){
    return {
        type: BUY_ICECREAM,
        info: 'first action'
    }
}

// Reducer
const cakereducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}
const icrecreamreducer = (state = initialIcecreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIcecreams: state.numOfIcecreams - 1
        }
        default: return state
    }
}

const rootReducer = combineReducer({ 
    cake: cakereducer,
    icecream: icrecreamreducer
 })

// Store
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial state ", store.getState())
const unsubscribe = store.subscribe(() => console.log('udated', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
unsubscribe();