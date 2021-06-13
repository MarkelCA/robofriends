import React, { Component } from 'react';
import Header from '../Header/Header';
import CardList from '../../components/CardList/CardList';
import Scroll from '../../components/Scroll/Scroll';
import ErrorBoundry from '../../components/ErrorBoundry/ErrorBoundry'
import './App.css'

class App extends Component {
    constructor() {
            super();
            this.state = {
                robots: []
            };
        }

        /*
        * Function that updates the robot state list based on searchBox filter
        */
        changedSearchField = (robotsFiltered) => { this.setState({ robots : robotsFiltered }) }


    render(){
        // We destructure for a clear syntax
        const { robots } = this.state
        return (
            <div id="container" className='tc'>
                <Header robots = { robots } searching={this.changedSearchField}/>
                    <ErrorBoundry>
                        <CardList robots={ robots } />
                    </ErrorBoundry>
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

