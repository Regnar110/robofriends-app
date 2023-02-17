import { CHANGE_SEARCHFIELD } from "./constants"

export const setSearchField = (text) => ({
    type: CHANGE_SEARCHFIELD, // typ akcji. Jest to zmienna z pliku js. Może być to również
    // string. JEst to zmienna żeby uniknąć misspelingu
    payload: text // payload to dane, które są przekazywane do reducera z akcji
})
// funkcja AKCJi zwracająca obiekt