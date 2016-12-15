import React, { Component } from 'react';
import filters from '../mocks/filters';
import books from '../mocks/books';

//components
import ItemsList from './items/itemsList';
import TopFiltersList from  './topFilters/topFilters';
import SideFiltersList from  './filtersSidebars/filtersSidebars';


class Main extends Component {
  constructor () {
    super();
    this.closeSideBar = this.closeSideBar.bind(this);
    this.openSideBar = this.openSideBar.bind(this);
    this.fitlerBySearch = this.fitlerBySearch.bind(this);
    this.filterByCategories = this.filterByCategories.bind(this);
    this.state = {
      books,
      filters,
    };
  }

  filterByCategories ( category ) {
    this.setState({
      filters: filters.map(filter => {
        if (filter.category === category) {
          filter.selected = true;
        } else {
          filter.selected = false;
        }
        return filter;
      }),
     books: category === 'All'? books : books.filter( book => {
      return book.category === category;
     }),
    });
  }

  fitlerBySearch ( event ) {
    this.setState({
      books : books.filter( book => {
        return(book.title.indexOf(event.target.value) > -1)
      })
    })
  }

  closeSideBar () {
    this.setState({
      navClosed: false
    });
  }

  openSideBar () {
    this.setState({
      navClosed: true
    });
  }


  render () {
    const { books, filters } = this.state;
    
    let filtersObj = {
      categories: this.filterByCategories,
      search: this.fitlerBySearch
    }

    let className = 'gallery';

    if ( this.state.navClosed ) {
      className += ' filter-is-visible';
    }

    return (
    <main className="main-content">

      <TopFiltersList filters={this.state.filters} onSelect={this.filterByCategories}/>

      <section className={ className }>
        <ItemsList items={this.state.books} />
      </section>
      <SideFiltersList filters={filtersObj} sideNavClosed={this.state.navClosed} closeSideBar={this.closeSideBar}/>

      <a href="#0" className="filter-trigger" onClick={ this.openSideBar }>Filters</a>
      
    </main>
   );
  }
}

export default Main;
