import React from 'react';
import styled from 'styled-components';

const Research = (props) => {
    const {school, program, title, projects} = props;
    const WorkItemContainer = styled.div`
        display:flex;
        flex-direction:column;
        color:silver;
        font-family: Raleway-Regular;
        letter-spacing:.1em;
        background-color:black;
        width:75%;
        margin-top:2em;

        @media (max-device-width: 1224px){
        font-size:11pt
    }
    `;
    const ItemContainer = styled.div`
        margin:.1em;
    `;
    return(
        <WorkItemContainer>
            <ItemContainer>{school}</ItemContainer>
            <ItemContainer>{program}</ItemContainer>
            <ItemContainer>{title}</ItemContainer>
            <ItemContainer>{projects}</ItemContainer>
        </WorkItemContainer>
        )
}

export default Research
