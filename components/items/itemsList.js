import React, { Component } from 'react';

//components
import Items from './items';


export default ({ items }) => {
    return (
        <ul>
            { items.map( items => <Items key={items.title} title={items.title} cover={items.cover}/>) }
        </ul>
   );
}


