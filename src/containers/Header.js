import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import Title from '../components/Title';
import Logo from '../components/Logo.js'
import Header_Content from '../components/Header-Content.js'
import './Header.css'


class Header extends Component {
        /*
         * It's important for Header to have its own robots state
         * so we can change the App's robots state without modifying 
         * this one, otherwise we can't recover the robots after filtering
         */
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField : ""
        }
    }

    onSearchChange = (event) => {
        const searchField_value = event.target.value;
        const header = document.getElementById('header')

        if(searchField_value)
            header.classList.add('small')
        else
            header.classList.remove('small')

        this.setState({ searchField:searchField_value }, () => {
            // We destructure for a clear syntax
            const { robots } = this.state;
            const filteredRobots = robots.filter(this.includesSearchField)
            this.props.searching(filteredRobots)

        });
    }

    includesSearchField = (robot) => {
    let includes_field = false
        // We destructure for a clear syntax
        const { searchField } = this.state
        // We search by all the fields of the robot
        for(const field in robot){
            includes_field = robot[field]
                .toString()
                .toLowerCase()
                .includes( searchField.toLowerCase() )

            if (includes_field) return includes_field
        }

        // NOT REACHEABLE
        // Prevents bug if there are no fields on the robot
        return false;
    }

    scrollFunction = () => {
        const header = document.getElementById('header')
        const is_scrolled = document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
        const searchField_empty = this.state.searchField === ''

        if(is_scrolled) {
            if(searchField_empty)
                header.classList.add('small')
            
        }
        else 
            header.classList.remove('small')

            

    }
    render() {
        return (
            <div id="header" className='mv3'>
                <Logo/>
                <Header_Content>
                    <Title/>
                    <SearchBox searchChange={this.onSearchChange}/>
                </Header_Content>
            </div>
        );
    };

    componentDidMount() {
        // We fetch the robots from a test api into json
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response =>  response.json() )
            .then( users =>  this.setState({ robots : users }) )
        window.onscroll = this.scrollFunction;
    }
}

export default Header;