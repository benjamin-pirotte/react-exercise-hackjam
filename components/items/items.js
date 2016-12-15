import React, { Component } from 'react';

//components

export default ({ title, cover }) => {
    return (
        <li title={ title }>
            <img src={ cover }/>
        </li>
   );
}

