import React from 'react';
import Card from './Card.js'

const CardList = ({robots}) => {
    return(
        <div>
            {
               robots.map(({id, name, email}) => <Card id={id} name={name} email={email} key={id}/>) 
            }
        </div>
    )
}

export default CardList;