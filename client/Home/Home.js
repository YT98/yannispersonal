import React from 'react';
import styled from 'styled-components';

import Header from './Header';

const StyledHome = styled.div`
    padding: 25px;
`

export default class Home extends React.Component {
    render() {
        return (
            <StyledHome>
                <Header />
            </StyledHome>
        )
    }
}