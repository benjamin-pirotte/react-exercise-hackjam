import React, { Component } from 'react';

//components
import Search from './search';


export default ({ sideNavClosed, closeSideBar, filters}) => {
    return (
      <div className={ sideNavClosed ? 'filter filter-is-visible': 'filter' }>
        <form>
            <Search handler={filters.search}/>
        </form>
        <a href="#0" className="close" onClick={ closeSideBar }>Close</a>
    </div>
   )
}






