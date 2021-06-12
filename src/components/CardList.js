import React from 'react';
import Card from './Card.js';

const CardList = ({ robots }) => {
    // The next line it's just to test the ErrorBoundry component
    //throw new Error('Something went wrong')
    return (
        <div className="cards-wrapper tc bg-dark-green">
            {robots.map(printCard)}
        </div>
    );
}

const printCard = ( { id, name, email, username }) => {
    return <Card key={id} id={id} name={name} email={email} username={username} />
}

export default CardList;