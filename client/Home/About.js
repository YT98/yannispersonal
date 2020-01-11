import React from 'react';
import styled from 'styled-components';
import deviceSizes from '../deviceSizes';

import SkillLevel from '../components/SkillLevel';

export default class About extends React.Component {
    render() {

        const AboutWrapper = styled.div`
            background-color: ${this.props.theme.lightGray};

            h1 {
                color: ${this.props.theme.mainBlue};
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

            @media ${deviceSizes.mobileL} {
                h1 {
                    width: 250px;
                    margin: auto;
                }
                p {
                    width: 250px;
                    padding-top: 25px;
                    margin: auto;
                    line-height: 1.8;
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
                h1 {
                    width: 250px;
                    margin: auto;
                }
                .content-wrapper {
                    .section {
                        width: 250px;
                        margin-right: 50px;
                    }
                }
            }

            @media ${deviceSizes.mobileL} {
                .content-wrapper {
                    justify-content: center;
                    .section {
                        margin-right: 0;
                        ul {
                            li {
                                font-size: 15px;
                            }
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
            @media ${deviceSizes.mobileL} {
                h1 {
                    width: 250px;
                    margin: auto;
                }
                .item {
                    width: 250px;
                    margin: auto;
                    .date-title {
                        flex-wrap: wrap;
                        .date {
                            flex-shrink: 0;
                            padding-right: 15px;
                            width: 100%;
                        }
                        .title {
                            margin-top: 0;
                        }
                    }
                    .description {
                        ul {
                            margin-left: 0;
                            li {
                                p {
                                    padding-left: 10px;
                                }
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
                                    <li> CSS, Sass, Less <SkillLevel value={5} /> </li>
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
                                    <li> Document-oriented <SkillLevel value={3} /> </li>
                                    <li> MongoDB <SkillLevel value={3} /> </li>
                                    <li> SQL Databases <SkillLevel value={2} /> </li>
                                    <li> Microsoft SQL Server <SkillLevel value={2} /> </li>
                                </ul>
                            </div>

                            <div class="section">
                                <h2> Languages </h2>
                                <ul>
                                    <li> Javascript <SkillLevel value={5} /> </li>
                                    <li> Bash <SkillLevel value={5} /> </li>
                                    <li> Python <SkillLevel value={4} /> </li>
                                    <li> Java <SkillLevel value={3} /> </li>
                                    <li> C# <SkillLevel value={3} /> </li>
                                </ul>
                            </div>

                            <div class="section">
                                <h2> DevOps </h2>
                                <ul>
                                    <li> Jenkins <SkillLevel value={5} /></li>
                                    <li> Docker <SkillLevel value={2} /></li>
                                    <li> Kubernetes <SkillLevel value={2} /></li>
                                </ul>
                            </div>

                            <div class="section">
                                <h2> Misc. </h2>
                                <ul>
                                    <li> AGILE <SkillLevel value={5} /></li>
                                    <li> Git version control <SkillLevel value={4} /></li>
                                    <li> Linux environment <SkillLevel value={4} /></li>
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
                                <p class="date"> 09/2019 - Present </p>
                                <p class="title"> Université de Montréal </p>
                            </div>
                            <div class="description">
                                <ul>
                                    <li><p> Physics and Computer Science B.Sc.</p></li>
                                </ul>
                            </div>
                        </div>
                        <div class="item">
                            <div class="date-title">
                                <p class="date"> 09/2018 - 05/2019 </p>
                                <p class="title"> Université de Montréal </p>
                            </div>
                            <div class="description">
                                <ul>
                                    <li><p> Preparatory Year - Pure and Applied Sciences Specialization</p></li>
                                    <li><p> GPA: 4.0 </p></li>
                                    <li><p> Dean's List - "Mention d'excellence" </p></li>
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
                                <p class="date"> 05/2019 - 08/2019 </p>
                                <p class="title"> Software Developer Intern <span>at</span> Nuance </p>
                            </div>
                            <div class="description">
                                <ul>
                                    <li><p>Back-End Web Development (Java, Maven)</p></li>
                                    <li><p>Continuous Integration/Delivery (Jenkins)</p></li>
                                    <li><p>DevOps (Docker, Kubernetes)</p></li>
                                    <li><p>AGILE development</p></li>
                                    <li><p>Member of team in charge of an application which acted as a bridge between Nuance's clients and its speech recognition services. </p></li>
                                </ul>
                                <ul>
                                    <li><p>Improved the CI/CD pipeline to assure constant code quality and to detect potential security flaws.</p></li>
                                    <li><p>Reduced the number of bugs in the application by more than 90%.</p></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="item">
                            <div class="date-title">
                                <p class="date"> 2018/01 - 2018/05 </p>
                                <p class="title"> Junior Web Developer <span>at</span> Empty Cubicle </p>
                            </div>
                            <div class="description">
                                <ul>
                                    <li><p> Full Stack Web Development (ASP.NET MVC, Azure, MicrosoftSQLServer, React.js, Redux.js, HTML, CSS). </p></li>
                                    <li><p> Collaborated with artificial intelligence consultant agencies to develop a smart resume verification system. </p></li>
                                    <li><p> Developed essential features of the application, such as user registration and account preferences. </p></li>
                                </ul>
                                <ul>
                                    <li><p> Implemented React.js (coupled with Redux) as a project-wide front-end framework. Trained developers on the team on how to properly implement these technologies in their workflow. </p></li>
                                    <li><p> Implemented a REST architectural pattern in a previously MVC-based application. </p></li>
                                </ul>
                            </div>
                        </div>

                        <div class="item" style={{ paddingBottom: '100px' }}>
                            <div class="date-title">
                                <p class="date"> 2017 - 2019 </p>
                                <p class="title"> Freelance Web Developer </p>
                            </div>
                            <div class="description">
                                <ul>
                                    <li><p> Full Stack Web Development (NGINX, Node.js, Express, MongoDB, React.js, HTML, CSS). </p></li>
                                    <li><p> Client prospection, defining the client's needs, preparing the work scope and client follow-up. </p></li>
                                </ul>
                            </div>
                        </div>

                    </WorkEducation>

                </div>
            </AboutWrapper>
        )
    }
}