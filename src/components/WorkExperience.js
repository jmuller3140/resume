import React from 'react';
import styled from 'styled-components';

const WorkExperience = (props) => {
    const {company, jobTitle ,projects ,technology} = props;
    const WorkItemContainer = styled.div`
        display:flex;
        flex-direction:column;
        color:silver;
        font-family: Raleway-Regular;
        letter-spacing:.1em;
        font:20pt;
        background-color:black;
        width:75%;
        margin-top:2em;
    `;
    const ItemContainer = styled.div`
        margin:.1em;
    `;
    return(
        <WorkItemContainer>
            <ItemContainer>{company}</ItemContainer>
            <ItemContainer>{jobTitle}</ItemContainer>
            <ItemContainer>{projects}</ItemContainer>
            <ItemContainer>{technology}</ItemContainer>
        </WorkItemContainer>
        )
}

export default WorkExperience
