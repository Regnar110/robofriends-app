import React from 'react';
import './card.scss';

const Card = ({name, email, id}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-3'>
            <img src={`https://robohash.org/${id}`} alt='robot_image'/>
            <div>
                <h2>{name}</h2>
                    <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;