import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import AboutContainer from './AboutContainer';
import Work from './Work';
import Contact from './Contact';

const StyledHome = styled.div`
`

export default class Home extends React.Component {
    render() {
        return (
            <StyledHome>
                <Header />
                <AboutContainer />
                <Work />
                <Contact />
            </StyledHome>
        )
    }
}