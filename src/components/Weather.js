import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

const Weather = (props) => {

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
    const location = window.location.origin + '/images/weatherappmock.jpg';
    const mobileLocation = window.location.origin + '/images/weatherappmock.jpg';
    return(
    <div>
        <MediaQuery query="(min-device-width: 1224px)">
        <ContainerDiv>
            <img src={location} height='600px' width='800px' alt="Weather App mockup"/>
            <DescriptionContainer>
            <StyledLink href="">The Weather App</StyledLink><br/>
            <Description>An application which shoes the 5 day weather forcast for cities or geographic locations.</Description><br/>
            <Description>API used from weathermap API and timezonedb to calculate the time difference from UTC time.
            Shows weather pictures based on the weather forcast for the day.</Description>
            <br/>
            <Description>Built in Javascript, React.js, Java</Description><br/>
            <Description></Description>
            </DescriptionContainer>
        </ContainerDiv>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
            <ContainerDivMobile>
                <img src={mobileLocation} height='300px' width='400px' alt="Provider Finder Mockup"/>
                <DescriptionContainerMobile>
                <StyledLink href="https://ibxweb.healthsparq.com/healthsparq/public/#/one/city=Philadelphia&state=PA&country=&insurerCode=IBXBLUE_I&brandCode=IBXBLUECOMM&productCode=all" target="_blank">PROVIDER FINDER</StyledLink><br/>
                <DescriptionMobile>A co-developed application showing users the closest providers based on their insurance policy and GPS location. Uses Google's API that takes in GPS locations of health service providers to give the user directions based on their current location. Displays indepth information of each curated provider.
                </DescriptionMobile>
                <br/>
                <DescriptionMobile>Built in Javascript, jQuery, Java</DescriptionMobile><br/>
                </DescriptionContainerMobile>
            </ContainerDivMobile>
        </MediaQuery>
    </div>
    )
}

export default Weather
