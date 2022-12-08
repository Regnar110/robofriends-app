import React, { Component } from 'react';
import './app.scss';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox.js';
import {robots} from './components/robots';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        const {robots} = this.state
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        )
    }
}

export default App;