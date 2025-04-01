import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';

function App() {
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         searchfield: '',
    //     };
    // }

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((response) => response.json())
    //         .then((users) => this.setState({ robots: users }));
    // }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setRobots(users));
    }, []);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    };
    const filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
        <h1>Loading</h1>
    ) : (
        <div className="divApp">
            <h1>Robo Friends</h1>
            <Searchbox searchChange={onSearchChange} />
            <Scroll>
                <CardList robots={filteredRobots} />
            </Scroll>
        </div>
    );
}

export default App;
