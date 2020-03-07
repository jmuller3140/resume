import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

const Education = (props) => {
    const {school, degree, minor, gpa, graduated} = props;
    const EducationItemContainer = styled.div`
        display:flex;
        flex-direction:column;
        color:silver;
        font-family: Raleway-Regular;
        letter-spacing:.1em;
        background-color:black;
        width:75%;
        margin-top:2em;
    `;
    const ItemContainer = styled.div`
        margin:.1em;
    `;
//
// ----------------------------------------------
//
    const EducationItemContainerMobile = styled.div`
        display:flex;
        flex-direction:column;
        color:silver;
        font-family: Raleway-Regular;
        letter-spacing:.1em;
        font-size:11pt;
        background-color:black;
        width:90%;
        line-height:1.3em;
        margin-bottom:2em;
    `;
    return(
    <div>
        <MediaQuery query="(min-device-width: 1224px)">
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
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
            <EducationItemContainerMobile>
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
            </EducationItemContainerMobile>
        </MediaQuery>
    </div>

        )
}

export default Education
