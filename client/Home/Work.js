import React from 'react';
import styled from 'styled-components';
import {holidayHomesImage} from '../../images/index';
import {condosFabreImage} from '../../images/index'
import deviceSizes from '../deviceSizes';

const WorkWrapper = styled.div`
    .work-container {
        width: 925px;
        margin: auto;
        .item {
            width: 100%;

        }
    }

    @media ${deviceSizes.mobileL} {
        .work-container {
            width: 100%;
        }
    }
`

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .description {
        width: 275px;
        padding: 50px;
        background-color: #F8F8F8;
        p {
            line-height: 1.5;
        }
        a {
            font-family: Roboto, sans-serif;
            text-decoration: none;
            transition: 0.25s;
            padding-bottom: 2px;
            color: #333333;
            &:hover {
                padding-left: 10px;
                padding-right: 10px;
            }
        }
    }
    .image {
        position: relative;
        width: 600px;
        height: 800px;
        img {
            position: absolute;
            left: 50%; top: 50%;
            transform: translate(-50%, -50%);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            transition: all 0.25s ease-in-out;
        }
        .hovered {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        }
    }

    @media ${deviceSizes.mobileL} {
        width: 100%;
        box-sizing: border-box;
        padding: 100px 25px 0 25px;
        flex-wrap: wrap;
        .image {
            width: 100%;
            height: auto;
            padding: 0 50px 0 50px;
            box-sizing: border-box;
            img {
                position: static;
                transform: none;
                object-fit: contain;
                width: 100%;
            }
        }
    }
`

export default class Work extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            condosFabre: false,
            holidayHomes: false
        }
    }

    render() {
        return (
            <WorkWrapper>
                <div class="work-container">
                    <Item>
                        <div class="description">
                            <h2 style={{ color: '#7F9470' }}> Condos Fabre </h2>
                            <p> Condominium project in Montreal's Plateau neighborhood. </p>
                            <a
                                href="https://condosfabre.com/"
                                target="_blank"
                                style={{ color: '#7F9470'}}
                                onMouseEnter={() => this.setState({ holidayHomes: true })}
                                onMouseLeave={() => this.setState({ holidayHomes: false })} >
                                See it for yourself
                            </a>
                        </div>
                        <div class="image">
                            <img src={condosFabreImage} className={this.state.holidayHomes ? "hovered" : ""}/>
                        </div>
                    </Item>
                    <Item>
                        <div class="description" style={{ backgroundColor: '#F8F8F8' }}>
                            <h2 style={{ color: '#125589' }} > Holiday Homes 7 </h2>
                            <p> Real Estate investment firm based in St-Marteen, a georgeous caribbean island. </p>
                            <a 
                                href="https://www.holidayhomes7.com/"
                                target="_blank"
                                style={{ color: '#125589' }}
                                onMouseEnter={() => this.setState({holidayHomes: true})} 
                                onMouseLeave={() => this.setState({holidayHomes: false})} > 
                                See it for yourself 
                            </a>
                        </div>
                        <div class="image">
                            <img src={holidayHomesImage} className={this.state.holidayHomes ? "hovered" : ""}/>
                        </div>
                    </Item>
                </div>
            </WorkWrapper>
        )
    }
}