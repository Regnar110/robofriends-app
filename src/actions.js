import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING
} from "./constants"

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD, // typ akcji. Jest to zmienna z pliku js. Może być to również
    // string. JEst to zmienna żeby uniknąć misspelingu
    payload: text // payload to dane, które są przekazywane do reducera z akcji
}) 
// funkcja AKCJi zwracająca obiekt

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.cypress.io/users')
    .then(response => response.json())
    .then( data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
    .catch(err => dispatch({type: REQUEST_ROBOTS_FAILED, payload:err}))
}