import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import About from './About';

const StyledHome = styled.div`
    padding: 25px;
    margin: auto;
`

export default class Home extends React.Component {
    render() {
        return (
            <StyledHome>
                <Header />
                <About />
            </StyledHome>
        )
    }
}