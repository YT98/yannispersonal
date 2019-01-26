import React from 'react';

import Home from './Home/Home';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: 62.5%;
    h1 {
        font-family: Roboto, sans-serif;
        font-weight: 300;
        line-height: 1.8;
        font-size: 3em;
    }
  }
`
export default class App extends React.Component {
    render() {
        return (
            <div>
                <GlobalStyle />
                <Home />
            </div>
        )
    }
}