import React from 'react';

import Home from './Home/Home';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;

    h1 {
        font-family: Roboto, sans-serif;
        font-weight: 400;
        line-height: 1.8;
    }

    h2 {
        font-family: Roboto, sans-serif;
        font-weight: 400;
        line-height: 1.8;
    }

    p {
        font-family: Roboto, sans-serif;
        font-size: 20px;
        color: #333333;
        font-weight: 300;
    }


    a {
        font-family: Roboto, sans-serif;
        text-decoration: none;
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