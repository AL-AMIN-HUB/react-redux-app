import { createStore } from "redux";


const reducerFn = (state = { counter: 0 }, action) => {
    // Synchronous Function 
    // We should not mutable the original state

    if (action.type === "INC") {
        return {
            counter: state.counter + 1
        }
    }
    else if (action.type === "DEC") {
        return {
            counter: state.counter - 1
        }
    }
    else if (action.type === "ADD") {
        return {
            counter: state.counter + action.payload
        }
    }

    else if (action.type === "RESET") {
        return {
            counter: state.counter = 0
        }
    }

    return state;
}


const store = createStore(reducerFn);

export default store;