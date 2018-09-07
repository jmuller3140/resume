import React from 'react';

import styled from 'styled-components';

const Bluecross = (props) => {

    const ContainerDiv = styled.div`
        width: 100%;
        height:100%;
        background-color:white;
        color:white;
        font-size:30pt;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        padding-bottom:10%;
    `;
    const StyledLink= styled.a`
        text-decoration:underline;
        color:black;
        font-family: Raleway-Regular;

    `;
    const DescriptionContainer = styled.div`
        display:flex;
        flex-direction:column;
        align-items:left;
    `;
    const Description = styled.div`
        color:black;
        font-size:20pt;
        font-family:Moon-Light;
    `;
    const location = window.location.origin + '/images/providermockup.jpg';
    return(
        <ContainerDiv>
            <img src={location} height='600px' width='800px' alt="Provider Finder Mockup"/>
            <DescriptionContainer>
            <StyledLink href="https://ibxweb.healthsparq.com/healthsparq/public/#/one/city=Philadelphia&state=PA&country=&insurerCode=IBXBLUE_I&brandCode=IBXBLUECOMM&productCode=all" target="_blank">PROVIDER FINDER</StyledLink><br/>
            <Description>A co-developed application showing users the closest</Description>
            <Description>providers based on their insurance policy and GPS location</Description>
            <br/>
            <Description>Built in Javascript, jQuery, Java</Description><br/>
            <Description></Description>
            </DescriptionContainer>
        </ContainerDiv>
    )
}

export default Bluecross
