import React from 'react';

import styled from 'styled-components';

const Rumin = (props) => {

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
        width:50%;
        line-height:.9em;
    `;
    const Description = styled.div`
        color:black;
        font-size:20pt;
        font-family:Raleway-Regular;
    `;
    const location = window.location.origin + '/images/ruminmock.jpg';
    return(
        <ContainerDiv>
            <img src={location} height='600px' width='800px' alt="Rumin Mockup Picture"/>
            <DescriptionContainer>
            <StyledLink href="http://www.rumin.co" target="_blank">R U M I N</StyledLink><br/>
            <Description>A Journaling Application that takes in user's journal entries and displays them in a chronological order.</Description>
            <Description>Users can filter out journal entries by date as well.</Description><br/>
            <Description>Built in React.js, Node.js, Express.js, MongoDB</Description>
            <Description>Authenticated with JWT</Description><br/>
            <Description>Transitioning to AWS (DYNAMODB) and Python</Description>
            </DescriptionContainer>


        </ContainerDiv>
    )
}

export default Rumin
