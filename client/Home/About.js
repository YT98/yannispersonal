import React from 'react';
import styled from 'styled-components';

export default class About extends React.Component {
    render() {

        const AboutWrapper = styled.div`
            height: 1000px;
            background-color: ${this.props.theme.lightGray};

            .about-container {
                width: 925px;
                margin: auto;
            }
        `

        const WhatIDo = styled.div`
            padding-top: 50px;

            h1 {
                margin-top: 0;
            }

            p {
                width: 925px;
                margin: auto;
                line-height: 1.8;
            }
        `

        const WhatIKnow = styled.div`
            margin-top: 100px;

            .content-wrapper {
                width: 925px;
                margin: auto;
                display: flex;
                flex-wrap: wrap;

                .section {
                    width: 250px;
                    margin-right: 25px;
                    margin-bottom: 25px;

                    ul {
                        list-style-type: none;
                        margin: 0;
                        padding: 0;

                        li {
                            font-family: Roboto, sans-serif;
                            font-weight: 300;
                        }
                    }
                }
            }
        `

        return (
            <AboutWrapper>
                <div class="about-container">

                    <WhatIDo>
                        <h1> What I do </h1>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus. Egestas purus viverra accumsan in nisl nisi. Vitae turpis massa sed elementum tempus egestas sed. </p>
                        </div>
                    </WhatIDo>

                    <WhatIKnow>
                        <h1> What I know</h1>
                        <div class="content-wrapper">

                            <div class="section">
                                <h2> Front-End </h2>
                                <ul>
                                    <li> React.js </li>
                                    <li> HTML </li>
                                    <li> CSS3, Sass, Less </li>
                                    <li> jQuery </li>
                                </ul>
                            </div>

                            <div class="section">
                                <h2> Back-End </h2>
                                <ul>
                                    <li> Node.js </li>
                                    <li> ASP.NET </li>
                                    <li> PHP </li>
                                    <li> Django </li>
                                </ul>
                            </div>

                            <div class="section">
                                <h2> Databases </h2>
                                <ul>
                                    <li> Document-oriented databases </li>
                                    <li> SQL Databases </li>
                                    <li> MongoDB </li>
                                    <li> Microsoft SQL Server </li>
                                </ul>
                            </div>

                            <div class="section">
                                <h2> Languages </h2>
                                <ul>
                                    <li> C# </li>
                                    <li> Python </li>
                                    <li> Javascript </li>
                                </ul>
                            </div>

                            <div class="section">
                                <h2> Misc. </h2>
                                <ul>
                                    <li> Git version control </li>
                                    <li> Linux environment </li>
                                    <li> AGILE approach to development </li>
                                    <li> French </li>
                                    <li> English </li>
                                </ul>
                            </div>

                        </div>
                    </WhatIKnow>

                </div>
            </AboutWrapper>
        )
    }
}