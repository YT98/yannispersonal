import React from 'react';
import styled from 'styled-components';
import deviceSizes from '../deviceSizes';

import SkillLevel from '../components/SkillLevel';

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

            @media ${deviceSizes.tablet} {
                .about-container {
                    width: 600px;
                }
            }

            @media ${deviceSizes.mobileL} {
                .about-container {
                    width: 100%;
                    box-sizing: border-box;
                    padding: 0 25px 0 25px;
                }
            }
        `

        const WhatIDo = styled.div`
            padding-top: 100px;

            h1 {
                margin-top: 0;
            }

            p {
                width: 100%;
                line-height: 1.8;
            }

            @media ${deviceSizes.tablet} {
                p {
                }
            }
        `

        const WhatIKnow = styled.div`
            padding-top: 100px;

            .content-wrapper {
                width: 100%;
                display: flex;
                flex-wrap: wrap;

                .section {
                    width: 300px;
                    margin-right: 100px;
                    margin-bottom: 25px;

                    ul {
                        list-style-type: none;
                        margin: 0;
                        padding: 0;

                        li {
                            font-family: Roboto, sans-serif;
                            font-weight: 300;
                            padding-bottom: 5px;
                        }
                    }
                }
            }

            @media ${deviceSizes.tablet} {
                .content-wrapper {
                    .section {
                        width: 250px;
                        margin-right: 50px;
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
            @media ${deviceSizes.tablet} {
                .item {
                    .date-title {
                        p {
                            font-size: 17px;
                        }
                        .date {
                            width: 150px;
                            padding-right: 25px;
                            box-sizing: border-box;
                        }
                    }
                    .description {
                        ul {
                            margin-left: 165px;
                        }
                    }
                }
            }
        `

        return (
            <AboutWrapper>
                <div class="about-container">

                    <WhatIDo>
                        <h1> About me </h1>
                        <div>
                            <p> Hard-working developer with a flair for creating elegant and efficient solutions and a knack for rapidly learning new things. Self-taught full-stack web development and developed a number of single page web applications. Passionate about development, my objective is to keep developing my skills and advancing my career in my field of passion. </p>
                        </div>
                    </WhatIDo>

                    <WhatIKnow>
                        <h1> Skills </h1>
                        <div class="content-wrapper">

                            <div class="section">
                                <h2> Front-End </h2>
                                <ul>
                                    <li> React.js <SkillLevel value={5} /> </li>
                                    <li> HTML <SkillLevel value={5} /> </li>
                                    <li> CSS3, Sass, Less <SkillLevel value={5} /> </li>
                                    <li> jQuery <SkillLevel value={4} /> </li>
                                </ul>
                            </div>

                            <div class="section">
                                <h2> Back-End </h2>
                                <ul>
                                    <li> Node.js <SkillLevel value={5} /> </li>
                                    <li> ASP.NET <SkillLevel value={3} /> </li>
                                    <li> PHP <SkillLevel value={1} /> </li>
                                    <li> Django <SkillLevel value={1} /> </li>
                                </ul>
                            </div>

                            <div class="section">
                                <h2> Databases </h2>
                                <ul>
                                    <li> Document-oriented <SkillLevel value={4} /> </li>
                                    <li> SQL Databases <SkillLevel value={3} /> </li>
                                    <li> MongoDB <SkillLevel value={4} /> </li>
                                    <li> Microsoft SQL Server <SkillLevel value={3} /> </li>
                                </ul>
                            </div>

                            <div class="section">
                                <h2> Languages </h2>
                                <ul>
                                    <li> C# <SkillLevel value={4} /> </li>
                                    <li> Python <SkillLevel value={3} /> </li>
                                    <li> Javascript <SkillLevel value={5} /> </li>
                                </ul>
                            </div>

                            <div class="section">
                                <h2> Misc. </h2>
                                <ul>
                                    <li> Git version control <SkillLevel value={4} /></li>
                                    <li> Linux environment <SkillLevel value={4} /></li>
                                    <li> AGILE <SkillLevel value={5} /></li>
                                    <li> French <SkillLevel value={5} /></li>
                                    <li> English <SkillLevel value={5} /></li>
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