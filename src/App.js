import React, { Component } from 'react';
import './app.scss';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchField: ''
        }
    } 

    componentDidMount() { // metoda cyklu życia komponentu react - działa po zamontowaniu się komponentu.
        fetch('https://jsonplaceholder.cypress.io/users')
        .then(response => response.json())  // metoda .json() jest metodą obiektu response. Robi to samo co JSON.parse() jednakże nie jest jak parse()  metodą statyczną obiektu JSON a metodą obiektu RESPONSE i działa tylko z fetch())
        .then(users =>this.setState({robots:users}))
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        const {robots} = this.state
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
        return robots.length === 0 ? 
        <h1 className='tc f1'>Loading</h1>
        :
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filteredRobots}/>
        </div>
    }
}

export default App;