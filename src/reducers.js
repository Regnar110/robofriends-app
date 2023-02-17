import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING
} from "./constants"

// REDUCERY SĄ TO CZYSTE FUNKCJE, KTÓRE OTRZYMUJĄ AKCJĘ A ZWRACAJĄ STAN

const initialStateSearch = { // pusty state aplikacji, który jest w STORE
    searchField: '',
}

//REDUCER

export const searchRobots = (state=initialStateSearch, action={}) => {
    //parametry są z domyślnymi wartościami*żeby uniknąć błędów.
    //parametr state to stan naszej aplikacji. Action to obiekt, zwracany przez akcję
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload})
            // INNY SPOSÓB zamiast oBJECT.Assign:
                // {...state, {searchField:action.payload}}
            //tutaj zwracamy nowy obiekt, który będzie miał wszystko
            // co ma "state" z tym że zmieniamy w tym nowym obiekcie stanu
            // pole searchField. przypisujemy do niej wartość action.payload
            // z obiektu zwróconego przez akcję
        default: 
            return state;
    }
}

const initialStateRobots = {
    isPending: false,
    error: '',
    robots:[],
}
export const requestRobots = (state = initialStateRobots, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false})
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {error:action.payload, isPending: false})
        default:
            return state
    }
}