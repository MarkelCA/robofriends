import React, { Component } from 'react';
import SearchBox from './SearchBox.js';
import Title from './Title.js';
import { robots } from '../robots.js';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField : ''
        };
    }

    onSearchChange = (event) => {
        const searchField_value = event.target.value;
        this.setState({searchField:searchField_value}, () => {
            console.log(searchField_value)
            console.log(this.state.searchField)

            const robots = this.state.robots;
            const filteredRobots = robots.filter(this.includesSearchField)
            console.log(filteredRobots)
            console.log(this.props.searching(filteredRobots))
        });
    }

    includesSearchField = (robot) => {
        return robot.username.toLowerCase().includes(this.state.searchField.toLowerCase())
    }

    render() {
        return (
            <div id="header" className='mv3'>
                <Title />
                <SearchBox searchChange={this.onSearchChange}/>
            </div>
        );
    };
}

export default Header;
