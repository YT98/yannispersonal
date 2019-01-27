import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import AboutContainer from './AboutContainer';
import Work from './Work';

const StyledHome = styled.div`
    // padding: 25px;
    margin: auto;
`

export default class Home extends React.Component {
    render() {
        return (
            <StyledHome>
                <Header />
                <AboutContainer />
                <Work />
            </StyledHome>
        )
    }
}