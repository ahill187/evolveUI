import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component {
  render() {
    return (
        <div class="d-flex justify-content-center h-100">
            <div class="searchbar">
                <input class="search_input" type="text" name="" placeholder="Search..."></input>
                <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
            </div>
        </div>
    )
  }
}
