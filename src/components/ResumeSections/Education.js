import React from 'react';
import styled from 'styled-components';

const Education = (props) => {
    const {school, degree, minor, gpa, graduated} = props;
    const EducationItemContainer = styled.div`
        display:flex;
        flex-direction:column;
        color:black;
        font-family: Raleway-Regular;
        letter-spacing:.1em;
        font:20pt;
        background-color: #eee;
        width:100%;
        margin-top:2em;
    `;
    const ItemContainer = styled.div`
        margin:.1em;
    `;
    return(
        <EducationItemContainer>
            <ItemContainer>
                {school}
            </ItemContainer>
            <ItemContainer>
                {degree}
            </ItemContainer>
            <ItemContainer>
                {minor}
            </ItemContainer>
            <ItemContainer>
                Cumulative GPA: {gpa}
            </ItemContainer>
            <ItemContainer>
                Graduated: {graduated}
            </ItemContainer>
        </EducationItemContainer>
        )
}

export default Education
