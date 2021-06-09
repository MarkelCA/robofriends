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

            const robots = this.state.robots;
            const filteredRobots = robots.filter(this.includesSearchField)
            this.props.searching(filteredRobots)

        });
    }

    includesSearchField = (robot) => {
    let includes_field = false
        // We search by all the fields of the robot
        for(const field in robot){
            includes_field = robot[field].toString().toLowerCase().includes(this.state.searchField.toLowerCase())
            if (includes_field) break
        }
        
        return  includes_field
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
