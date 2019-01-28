import React from 'react';
import styled from 'styled-components';

export default class About extends React.Component {
    render() {

        const AboutWrapper = styled.div`
            background-color: ${this.props.theme.lightGray};

            h1 {
                color: ${this.props.theme.mainBlue}
            }

            .about-container {
                width: 925px;
                margin: auto;
            }
        `

        const WhatIDo = styled.div`
            padding-top: 100px;

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
            padding-top: 100px;

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

        const WorkEducation = styled.div`
            padding-top: 100px;
            .item {
                padding-bottom: 25px;
                .date-title {
                    display: flex;
                    align-items: center;
                    p {
                        font-weight: 400;
                    }
                    span {
                        font-weight: 300;
                        padding: 0 5px 0 5px;
                    }
                    .date {
                        width: 250px;
                    }
                    .title {

                    }
                }
                .description {
                    ul {
                        // list-style-type: none;
                        padding: 0;
                        margin-left: 265px;
                        li {
                            font-size: 10px;
                            p {
                                font-size: 15px;
                                padding: 0;
                                padding-left: 20px;
                                margin-top: 10px;
                            }
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

                    <WorkEducation>
                        <h1> Education </h1>
                        <div class="item">
                            <div class="date-title">
                                <p class="date"> 2018/09 - Present </p>
                                <p class="title"> Université de Montréal </p>
                            </div>
                            <div class="description">
                                <ul>
                                    <li><p> Physics and Computer Science B.Sc. (starting Fall 2019) </p></li>
                                    <li><p> Preparatory Year - Pure and Applied Sciences Specialization (Currently enrolled, GPA: 3.8) </p></li>
                                </ul>
                            </div>
                        </div>
                        <div class="item">
                            <div class="date-title">
                                <p class="date"> 2014 - 2015 </p>
                                <p class="title"> Collège Jean-de-Brébeuf </p>
                            </div>
                            <div class="description">
                                <ul>
                                    <li><p> Humanities - International Studies (with Advanced Mathematics) </p></li>
                                </ul>
                            </div>
                        </div>
                        <div class="item" style={{ paddingBottom: '100px' }}>
                            <div class="date-title">
                                <p class="date"> 2009 - 2014 </p>
                                <p class="title"> Collège International Marie de France </p>
                            </div>
                            <div class="description">
                                <ul>
                                    <li><p> DES (Diplôme d'Études Secondaires) </p></li>
                                    <li><p> ES (Economic and Social Sciences program) </p></li>
                                </ul>
                            </div>
                        </div>

                        <h1> Work experience</h1>
                        <div class="item">
                            <div class="date-title">
                                <p class="date"> 01/2017 - Present </p>
                                <p class="title"> Freelance Web Developer </p>
                            </div>
                            <div class="description">
                                <ul>
                                    <li><p> Full Stack Web Development (NGINX, Node.js, Express, MongoDB, React.js, HTML, CSS). </p></li>
                                    <li><p> My role also included client prospection, defining the client's needs, preparing the work scope as well as client follow-up. </p></li>
                                </ul>
                            </div>
                        </div>
                        <div class="item" style={{ paddingBottom: '100px' }}>
                            <div class="date-title">
                                <p class="date"> 2018/01 - 2018/05 </p>
                                <p class="title"> Junior Web Developer <span>at</span> Empty Cubicle </p>
                            </div>
                            <div class="description">
                                <ul>
                                    <li><p> Full Stack Web Development (ASP.NET MVC, Azure, MicrosoftSQLServer, React.js, Redux.js, HTML, CSS). </p></li>
                                    <li><p> Following an AGILE development approach. </p></li>
                                    <li><p> Development of a smart resume verification system alongside artificial intelligence consultant agencies. </p></li>
                                    <li><p> Worked on a number of essential features for the application, such as user registration and account preferences. </p></li>
                                </ul>
                                <ul>
                                    <li><p> Put in charge of implementing React.js (coupled with Redux) as a project-wide front-end framework. Trained developers on the team on how to properly implement these technologies in their work flow. </p></li>
                                    <li><p> Implemented REST API architectural pattern in a previously MVC-based (.cshtml Razor pages) project. </p></li>
                                </ul>
                            </div>
                        </div>

                    </WorkEducation>

                </div>
            </AboutWrapper>
        )
    }
}