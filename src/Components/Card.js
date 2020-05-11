import React from 'react';
import './Card.css';

const card =(props) =>
{
    return(
        <div className='col-3 card'>
            <div className='card-body'>
                <p>{props.tag}</p>
                <p>{props.value}</p>
            </div>
        </div>
    );
}

export default card;