import React, { Component } from 'react';

//components
import Filter from './topFiltersItems';

export default ({ filters, onSelect }) => {
    return (
        <div className="tab-filter-wrapper">
        	<div className="tab-filter">
                <ul>
                    <li className="placeholder">
                        <a onClick={ onSelect.bind(null, 'all') } data-type="all" href="#0">All</a>
                    </li>
                    { filters.map( filter => <Filter key={filter.category} filter={filter} onSelect={onSelect}/>) }
                </ul>
            </div>
        </div>
   )
}






