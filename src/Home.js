import React, { Component } from 'react';
import SearchContainer from './SearchContainer'

class Home extends Component {
  render(){
    return(
      <div>
        <h1>Movie Finder App</h1>
        <SearchContainer />
      </div>
    )
  }
}

export default Home
