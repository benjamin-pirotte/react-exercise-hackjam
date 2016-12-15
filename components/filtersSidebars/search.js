import React, { Component } from 'react';

//components


export default ({ handler }) => {
    return (
        <div className="filter-block">
            <h4>Search</h4>
            <div className="filter-content">
                <input type="search" placeholder="title, price..." onChange={handler}/>
            </div>
        </div>
   );
}



  
