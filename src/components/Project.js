import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Project = (props) => {
    const {name, picturePath, description, link}  = props;

    const ProjectContainer = styled.div`
        display:flex;
        justify-content: flex-start;
        width:100%;
    `;
    const DescriptionContainer = styled.div`
        font-family: Raleway-Regular;
        font-size:15pt;
        text-align:right;
        color:white;
        padding-top:5em;
        width:30em;
    `;
    const PictureContainer = styled.div`
        width:250px;
        height:250px;
        color:black;
        opacity:1;
        position:relative;
        overflow:hidden;
        margin-bottom:5em;
        margin-left:10em;
        width:30em;
        margin-right:25%;
        text-align:left;
    `;

    const Text = styled.div`
        position:absolute;
        top:100px;
        left:55px;
        width:150px;
        text-align:center;
        z-index:2;
        color:white;
        font-size:20pt;
        font-family:Moon-Light;
        letter-spacing:.1em;
    `;
    const Image = styled.img`
        position:absolute;
        left:0;
        top:0;
        opacity:.6;
        max-width: 100%;
        -moz-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        &:hover{
            opacity:.4;
            filter:blur(2px);
            -moz-transform: scale(1.1);
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
        }
    `;
    return(
        <ProjectContainer>
            <DescriptionContainer>
                {description}
            </DescriptionContainer>
            <Link to={link}>
                <PictureContainer>
                    <Text>{name}</Text>
                    <Image src={picturePath} height="250" width="250"/>
                </PictureContainer>
            </Link>
        </ProjectContainer>

    )


}

export default Project
