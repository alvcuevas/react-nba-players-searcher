import React, { Component } from 'react';
import styled from 'styled-components';
import Player from './components/Player';
import Search from './components/Search';


class App extends Component {
  render() {
    return (
      <div>
        <Title>NBA Players React Searcher</Title>
        <Search />
        <Player />
      </div>
    );
  }
}

const Title = styled.div`
    display: flex;
    justify-content: center;
    font-size: 25px;
    letter-spacing: 2px;
    margin-top: 15px;
`

export default App;
