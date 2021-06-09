import React, { Component } from 'react';
import Header from './Header.js';
import CardList from './CardList.js';
import Scroll from './Scroll.js';

class App extends Component {
    constructor() {
            super();
            this.state = {
                robots: [],
                searchField : ''
            };

        }

        changedSearchField = (robotsFiltered) => {
            this.setState({ robots : robotsFiltered});

    }
    render(){
        //if(this.state.robots.length === 0 && this.state.searchField) return <h2>Loading...</h2>
        //else
        return (
            <div id="container" className='tc'>
                <Header searching={this.changedSearchField}/>
                <Scroll>
                    <CardList robots={this.state.robots} />
                </Scroll>
            </div>
        );
    };
    componentDidMount() {
        // We fetch the robots from a test api into json
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response =>  response.json() )
            .then( users =>  this.setState({ robots : users }) )
    }
}


export default App;

