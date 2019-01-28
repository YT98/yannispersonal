import React from 'react';
import styled from 'styled-components';
import deviceSizes from '../deviceSizes';

const ContactWrapper = styled.div`
    width: 925px;
    margin: auto;
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 100px 0 100px 0;

        img {
            height: 259px;
        }

        div {
            padding: 50px;
            background-color: #F8F8F8;

            h2 {
                margin: 0;
                padding: 0;
            }
            p {
                margin: 0;
                padding-bottom: 25px;
            }
            .contact-intro {
                text-align: center;
            }
            ul {
                margin: 0; padding: 0;
                list-style-type: none;
                li {
                    display: inline-block;
                    padding: 0 20px 0 20px;
                    i {
                        padding-right: 5px;
                    }
                    a {
                        font-size: 15px;
                        font-weight: 300;
                        color: #333333;
                        opacity: 0.7;
                        transition: 0.25s;
                        &:hover {
                            opacity: 1;
                        }
                    }
                    .email {
                        border-bottom: solid 1px #333333;
                    }
                }
            }
        }
    }

    @media ${deviceSizes.tablet} {
        width: 600px;
        background-color: #F8F8F8;

        .container {
            width: 100%;
            flex-wrap: wrap;
            img {
                padding-top: 50px;
            }
            div {
                .contact-intro {
                }
                ul {
                    li {
                        text-align: center;
                        display: block;
                        padding-bottom: 10px;
                    }
                }
            }
        }
    }
`

export default class Contact extends React.Component {
    render() {
        return (
            <ContactWrapper>
                <div class="container">
                    <img src="https://i.gifer.com/QqOi.gif"/>
                    <div>
                        <h2> TL; DR: </h2>
                        <p> I'm awesome. </p>
                        <p class="contact-intro"> Here's where you can contact me : </p>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/yannistarfa/" target="_blank"> <i class="fab fa-linkedin"></i> LinkedIn </a></li>
                            <li><a href="https://github.com/YT98" target="_blank"> <i class="fab fa-github-square"></i> GitHub </a></li>
                            <li><a href="mailto:info@yannistarfa.com" class="email"> info@yannistarfa.com </a></li>
                        </ul>
                    </div>
                </div>
            </ContactWrapper>
        )
    }
}