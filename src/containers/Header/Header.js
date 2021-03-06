import React, { Component } from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';
import Title from '../../components/Title/Title';
import Logo from '../../components/Logo/Logo'
import Header_Content from '../../components/Header-Content/Header-Content.js'
import Credits from '../../components/Credits/Credits'
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
        const cardList = document.getElementById('robot-list')

        if(searchField_value)
            this.foldHeader(header, cardList, false)
        else
            this.foldHeader(header, cardList, true)

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
        const cardList = document.getElementById('robot-list')
        const is_scrolled = document.body.scrollTop > 0 || document.documentElement.scrollTop > 0
        const searchField_empty = this.state.searchField === ''

        if(!searchField_empty) {
            header.classList.add('small')
            cardList.style.marginTop = '15vh'
            return
        }

        if(is_scrolled) 
            this.foldHeader(header, cardList, false)
        
        else 
            this.foldHeader(header,cardList, true)
        
    }
    foldHeader(header, cardList, folded) {
        if(folded) {
            header.classList.remove('small')
            const margin = window.innerWidth <= 700 ? '65vh' : '50vh'
            cardList.style.marginTop = margin
            document.getElementById('credits').style.display = 'block'
        }
        else {
            header.classList.add('small')
            cardList.style.marginTop = '15vh'
            document.getElementById('credits').style.display = 'none'
        }
    }
    foldOnInit() {
            const cardList = document.getElementById('robot-list')
            const margin = window.innerWidth <= 700 ? '65vh' : '50vh'
            cardList.style.marginTop = margin
    }
    foldOnResize() {
            const cardList = document.getElementById('robot-list')
            const margin = window.innerWidth <= 700 ? '65vh' : '50vh'
        const isFolded = document.getElementById('header').classList.contains('small')
        if(!isFolded)
            cardList.style.marginTop = margin
    }
    render() {
        return (
            <div id="header" className='mv3'>
                <Logo/>
                <Header_Content>
                    <Title/>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Credits/>
                </Header_Content>
            </div>
        );
    };

    componentDidMount() {
        // We fetch the robots from a test api into json
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response =>  response.json() )
            .then( users =>  this.setState({ robots : users }) )
        this.foldOnInit()
        window.onscroll = this.scrollFunction;
        window.onresize = this.foldOnResize
    }
}

export default Header;
