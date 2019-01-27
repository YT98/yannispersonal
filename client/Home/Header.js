import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';

const Header = styled.div`
    position: relative;
    padding: 50px 50px 300px 50px;
    box-sizing: border-box;
    max-width: 100%;
    margin: auto;
    background-color: #F8F8F8;

    h1 {
        color: white;
        max-width: 925px;
        margin: auto;
    }

    .header-content-wrapper {

        .navigation-container {
            position: relative;
        }
    
        .intro-container {
            position: relative;
            margin-top: 100px;
        }
    }

`

const MenuButton = styled.button`
    position: absolute;
    z-index: 0;
    left: 0; top: 0;
    border: none;
    height: 50px; width: 50px;
    -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`

const HeaderBackground = styled.svg`
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
`

const ParticleWrapper = styled.div`
    position: absolute;
    top: 0; left: 0;
    height: 100%; width: 100%;
`

export default class Home extends React.Component {
    render() {
        return (
            <Header>

                <HeaderBackground viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="gradient" x1='0%' y1='0%' x2='100%' y2='100%'>
                            <stop offset="20%" style={{ stopColor: '#3366DB', stopOpacity:1 }} />
                            <stop offset="100%" style={{ stopColor: '#6286DB', stopOpacity:1 }} />
                        </linearGradient>
                    </defs>
                    <polygon fill="url(#gradient)" points='0,0 100,0 100,95 0,80' />
                </HeaderBackground>

                <ParticleWrapper>
                    <Particles
                        width="100%"
                        height="100%"
                    />
                </ParticleWrapper>


                <div class="header-content-wrapper">
                    <div class="navigation-container">
                        <MenuButton></MenuButton>
                        <h1> Yannis Tarfa </h1>
                    </div>

                    <div class="intro-container">
                        <h1> University Student and Web Developer based in Montreal, Canada. </h1>
                    </div>
                </div>

            </Header>
        )
    }
}