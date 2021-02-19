import React from 'react';
import Card from './Card.js';

const CardList = ({ robots }) => {
    return (
        <div className="cards-wrapper tc bg-dark-green">
            {robots.map(printCard)}
        </div>
    );
}

function printCard({ id, name, email, username }) {
    return <Card key={id} id={id} name={name} email={email} username={username} />
}

export default CardList;
