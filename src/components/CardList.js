//CardList.js is a parent of Card.js

import React from 'react';

import Card from './Card'


const CardList = (props) => {
    const {robots} = props
//looping over the robots.js items and displaying them as a <Card />
    
    return (
        <div>
            {robots.map((user, index) => {
        return (
        <Card 
        key={index} 
        id={robots[index].id} 
        name={robots[index].name} 
        email={robots[index].email} 
        />
        )
    })}
        </div>
    )
    }

    export default CardList