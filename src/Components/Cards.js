import React from 'react';
import Card from './Card';
import './Cards.css';

const cards = (props) =>{
    return(
        <div className='row' id='cards-outer-row'>
            <div className='col-lg-5' >
             <h4>{props.heading}</h4>
                <div className='row' >
                     <Card value={props.confirmed} tag="Confirmed"/>
                     <Card value={props.active} tag="Active"/>
                     <Card value={props.recovered} tag="Recovered"/>
                     <Card value={props.death} tag="Death"/>
                </div>
             </div>
        </div>
        
    );
}

export default cards;