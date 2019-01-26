import React from 'react';
import styled from 'styled-components';

const StyledHome = styled.div`
    padding: 25px;
`

const StyledHeader = styled.div`
    position: relative;
    padding: 50px;
    box-sizing: border-box;
    height: 500px;
    max-width: 1300px;
    margin: auto;
`

const StyledHeaderBackground = styled.svg`
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
`

export default class Home extends React.Component {
    render() {
        return (
            <StyledHome>
                <StyledHeader>
                    <StyledHeaderBackground viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="grad" x1='0%' y1='0%' x2='100%' y2='100%'>
                                <stop offset="20%" style={{ stopColor: '#3366DB', stopOpacity:1 }} />
                                <stop offset="100%" style={{ stopColor: '#6286DB', stopOpacity:1 }} />
                            </linearGradient>
                        </defs>
                        <polygon fill='url(#grad)' points='0,0 100,0 100,100 0,80' />
                    </StyledHeaderBackground>

                </StyledHeader>
            </StyledHome>
        )
    }
}