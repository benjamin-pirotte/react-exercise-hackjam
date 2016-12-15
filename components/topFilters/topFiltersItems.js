import React, { Component } from 'react';

//components

export default ({ filter, onSelect }) => {
    return (
        <li key={filter.category } onClick={ onSelect.bind(null, filter.category) } style={{display: 'inline-style'}}>
            <a className={filter.selected? 'selected': ''} href="#0">{filter.category}</a>
        </li>
    );
}

