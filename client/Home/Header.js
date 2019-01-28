import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';

const Header = styled.div`
    position: relative;
    padding: 100px 50px 100px 50px;
    box-sizing: border-box;
    max-width: 100%;
    margin: auto;
    background-color: #F8F8F8;

    .header-content-wrapper {

        .navigation-container {
            position: relative;
            width: 925px;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            h1 {
                display: inline-block;
                margin: 0;
                color: white;
            }

            ul {
                float: right;
                margin: 0;
                padding: 0;
                li {
                    display: inline-block;
                    padding: 0 20px 0 20px;
                    i {
                        padding-right: 5px;
                    }
                    a {
                        font-size: 15px;
                        font-weight: 300;
                        color: white;
                        opacity: 0.7;
                        transition: 0.25s;
                        &:hover {
                            opacity: 1;
                        }
                    }
                    .email {
                        border-bottom: solid 1px #FFFFFF;
                    }
                }
            }
        }
    
        .intro-container {
            h1 {
                color: white;
                max-width: 925px;
                margin: auto;
                text-align: center;
            }
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
                        <linearGradient id="gradient" x1='50%' y1='30%' x2='50%' y2='100%'>
                            <stop offset="20%" style={{ stopColor: '#3366DB', stopOpacity:1 }} />
                            <stop offset="100%" style={{ stopColor: '#6286DB', stopOpacity:1 }} />
                        </linearGradient>
                    </defs>
                    <polygon fill="url(#gradient)" points='0,0 100,0 100,100 0,100' />
                </HeaderBackground>

                <ParticleWrapper>
                    <Particles
                        width="100%"
                        height="100%"
                    />
                </ParticleWrapper>


                <div class="header-content-wrapper">
                    <div class="navigation-container">
                        <h1> Yannis Tarfa </h1>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/yannistarfa/" target="_blank"> <i class="fab fa-linkedin"></i> LinkedIn </a></li>
                            <li><a href="https://github.com/YT98" target="_blank"> <i class="fab fa-github-square"></i> GitHub </a></li>
                            <li><a href="mailto:info@yannistarfa.com" class="email"> info@yannistarfa.com </a></li>
                        </ul>
                    </div>

                    <div class="intro-container">
                        <h1> Hi, I'm Yannis. I'm a university student and web developer from Montreal, Canada. </h1>
                    </div>
                </div>

            </Header>
        )
    }
}