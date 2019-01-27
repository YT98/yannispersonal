import React from 'react';
import styled from 'styled-components';
import {holidayHomesImage} from '../../images/index.js';

const WorkWrapper = styled.div`
    .work-container {
        width: 925px;
        margin: auto;
        .item {
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
            -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            -ms-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            -o-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        }
    }

`

export default class Work extends React.Component {
    render() {
        return (
            <WorkWrapper>
                <div class="work-container">
                    <Item>
                        <div class="description" style={{ backgroundColor: '#F8F8F8' }}>
                            <h2 > Holiday Homes 7 </h2>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <a href="#"> See it for yourself </a>
                        </div>
                        <div class="image">
                            <img src={holidayHomesImage} />
                        </div>
                    </Item>
                    <Item>
                        <div class="description">
                            <h2> Condos Fabre </h2>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <a href="#"> See it for yourself </a>
                        </div>
                        <div class="image">
                            <img src={holidayHomesImage} />
                        </div>
                    </Item>
                </div>
            </WorkWrapper>
        )
    }
}