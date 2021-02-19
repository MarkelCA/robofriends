import React, { Component } from 'react';
import Header from './Header.js';
import CardList from './CardList.js';
import { robots } from '../robots.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField : ''
        };

        }

        changedSearchField = (robotsFiltered) => {
            this.setState({ robots : robotsFiltered});

    }
    render(){

        return (
            <div id="container" className='tc'>
                <Header searching={this.changedSearchField}/>
                <CardList robots={this.state.robots} />
            </div>
        );
    };
}


export default App;

