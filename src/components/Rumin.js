import React from 'react';
import MediaQuery from 'react-responsive';
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
 //
 //
 //
     const ContainerDivMobile = styled.div`
        width: 100%;
        height:100%;
        background-color:white;
        color:white;
        font-size:20pt;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        padding-bottom:10%;
    `;
    const DescriptionContainerMobile = styled.div`
        display:flex;
        flex-direction:column;
        align-items:left;
        width:80%;
        line-height:.9em;
    `;
    const DescriptionMobile = styled.div`
        color:black;
        font-size:12pt;
        font-family:Raleway-Regular;
    `;
    const location = window.location.origin + '/images/ruminmock.jpg';
    const mobileLocation = window.location.origin + '/images/ruminmockmobile.png';
    return(
        <div>
            <MediaQuery query="(min-device-width: 1224px)">
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
            </MediaQuery>
            <MediaQuery query="(max-device-width: 1224px)">
                <ContainerDivMobile>
                    <img src={mobileLocation} height='300px' width='400px' alt="Rumin Mockup Picture"/>
                    <DescriptionContainerMobile>
                    <StyledLink href="http://www.rumin.co" target="_blank">R U M I N</StyledLink><br/>
                    <DescriptionMobile>A Journaling Application that takes in user's journal entries and displays them in a chronological order.
                    </DescriptionMobile>
                    <DescriptionMobile>Users can filter out journal entries by date as well.</DescriptionMobile><br/>
                    <DescriptionMobile>Built in React.js, Node.js, Express.js, MongoDB</DescriptionMobile>
                    <DescriptionMobile>Authenticated with JWT</DescriptionMobile><br/>
                    <DescriptionMobile>Transitioning to AWS (DYNAMODB) and Python</DescriptionMobile>
                    </DescriptionContainerMobile>
                </ContainerDivMobile>
            </MediaQuery>
        </div>
    )
}

export default Rumin
