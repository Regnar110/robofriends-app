import React, { useState, useEffect } from 'react';
import './app.scss';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState("")
    const [count, setCount] = useState(0)

    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))

    useEffect(() => {
        fetch('https://jsonplaceholder.cypress.io/users')
        .then(response => response.json())  // metoda .json() jest metodą obiektu response. Robi to samo co JSON.parse() jednakże nie jest jak parse()  metodą statyczną obiektu JSON a metodą obiektu RESPONSE i działa tylko z fetch())
        .then(users => setRobots(users))
        console.log(count)
    },[count]) // w HOOKU useEffect drugi parametr to tablica, która przyjmuje wartości
    // które wskazują hookowi efektu kiedy ma się on uruchoimić. Na przykład
    // jeżeli wpiszemyw niego searchfield to hoook ten uruchamiać się będzie tylko
    //wtedy kiedy wartość searchfield będzie zmieniana np przy użyciu funkcji zmiany stanu
    // Pozostawienie pustej [] da znak hookowi że ma się uruchomić tylko raz
    // gdy komponent zostanie pierwszy raz zamontowany. Inaczej ComponentDidMount
    // bez tego hook uruchamiał by się w nieskończonośc bo w jego wnętrzu zmieniamy
    // stan robots.
    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    return !robots.length ? 
        <h1 className='tc f1'>Loading</h1>
        :
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <button onClick={()=> setCount(count+1)}>Click Me!</button>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
              <CardList robots={filteredRobots}/>
            </Scroll>
        </div>
}
export default App;