import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faFacebook, faTwitterSquare, faGithub } from '@fortawesome/free-brands-svg-icons';

import styled from 'styled-components';

const Footer = () => {

    const FooterContainer = styled.div`
        width:100%;
        padding-bottom:5em;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        background-color: #eee;
    `;
    const Icons = styled.div`
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:center;
    `;
    const Icon = styled.a`
        color:grey;
        font-size:35pt;
        padding:1em;
        border-top:1px solid silver;

        &:hover{
            color:#028474;
        }
    `;
    const Copyright = styled.div`
        color:grey;
        font-family:Moon-Light;
    `;

        return(
            <FooterContainer>
                <Icons>
                    <Icon href="/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></Icon>
                </Icons>
                <Copyright>
                    Made in 2020 <FontAwesomeIcon icon={faCopyright}/>
                </Copyright>
            </FooterContainer>
            )
    }
export default Footer
