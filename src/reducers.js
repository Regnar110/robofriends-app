import { CHANGE_SEARCHFIELD } from "./constants"
// REDUCERY SĄ TO CZYSTE FUNKCJE, KTÓRE OTRZYMUJĄ AKCJĘ A ZWRACAJĄ STAN

const initialState = { // pusty state aplikacji, który jest w STORE
    searchField: ''
}

//REDUCER

export const searchRobots = (state=initialState, action={}) => {
    //parametry są z domyślnymi wartościami*żeby uniknąć błędów.
    //parametr state to stan naszej aplikacji. Action to obiekt, zwracany przez akcję
    switch(action.type) {
        case CHANGE_SEARCHFIELD:
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