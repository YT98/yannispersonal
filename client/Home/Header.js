import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    position: relative;
    padding: 50px 50px 300px 50px;
    box-sizing: border-box;
    max-width: 1300px;
    margin: auto;

    h1 {
        color: white;
        margin-left: 175px;
        margin-top: 0;
    }

    .navigation-container {
        position: relative;
    }

    .intro-container {
        margin-top: 100px;
    }
`

const MenuButton = styled.button`
    position: absolute;
    left: 0; top: 0;
    border: none;
    height: 50px; width: 50px;
    -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`

const StyledHeaderBackground = styled.svg`
    z-index: -1;
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
`

export default class Header extends React.Component {
    render() {
        return (
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

                <div class="header-content-wrapper">
                    <div class="navigation-container">
                        <MenuButton></MenuButton>
                        <h1> Yannis Tarfa </h1>
                    </div>

                    <div class="intro-container">
                        <h1> University Student and Web Developer based in Montreal, Canada. <br/> I like building stuff. </h1>
                    </div>
                </div>

            </StyledHeader>
        )
    }
}