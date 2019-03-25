import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { getPlayer } from '../store/actions/player';

class Search extends Component {

    state = {
        player: '',
        error: ''
    }

    searchPlayer = (e) => {
        const playerName = this.state.player.split(' ');
        const firstname = playerName[0];
        const surname = playerName[1];
        e.preventDefault();

        if (firstname && surname) {
            this.props.getPlayer(firstname, surname);
            this.setState({ error: '' });
        } else {
            this.setState({ error: 'Search requires a first and last name.' });
        }
    }

    handleChange = (e) => {
        this.setState({ player: e.target.value })
    }

    render() {
        const { player, error } = this.state;
        const { loading } = this.props;
        return (
            <form onSubmit={this.searchPlayer}>
                <SearchWrapper>
                    <SearchBar type="text" value={player} onChange={this.handleChange} />
                    <SearchButton type="submit">🔍</SearchButton>
                </SearchWrapper>
                <Result>
                    { error && <Error>{error}</Error> }
                    { loading && <Spinner></Spinner> }
                </Result>
            </form>
        )
    }
}

export default connect(store => ({ loading: store.player._loading }), { getPlayer })(Search);

const SearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    width: 500px;
    margin: 25px auto;
`

const SearchBar = styled.input`
    padding: 14px 20px;
    border: 1px solid #d8d8d8;
    color: #8D96AA;
    font-size: 18px;
    width: 250px;
    border-radius: 6px 0px 0px 6px;
    flex: 7;
`

const SearchButton = styled.button`
    background-color: #2F5EE5;
    padding: 14px 20px;
    border:none;
    border-radius: 0px 6px 6px 0px;
    cursor: pointer;
    flex: 1;
`
const Result = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0px;
`

const Error = styled.div`
    color: red;
    font-size: 17px;
`

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

const Spinner = styled.div`
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    text-align: center;
    animation: ${spin} 2s linear infinite;
`




