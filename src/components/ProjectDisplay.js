import React from 'react';
import styled from 'styled-components';

import Project from './Project';

export default class ProjectDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {projectSection: ""};
        this.match = this.props.match.url;
    }

    componentDidMount(){
            let projectArray = {project :
                [{name: "RUMIN", picturePath: window.location.origin + '/images/rumin.png', key:0, description:"A Journaling App", link: this.match + '/rumin'},
                {name: "PROVIDER FINDER", picturePath: window.location.origin + '/images/bluecross.png', key:1, description: "A Health Information Repository", link: this.match + '/bluecross'},
                {name: "MEDICINE CABINET", picturePath: window.location.origin + '/images/bluecross.png', key:2, description:"A Medicine Tracker", link: this.match + '/medcab'},]};
            let projectSection = projectArray.project.map((post) => {
                    let props = {name: post.name, picturePath: post.picturePath, key: post.key, description: post.description, link:post.link};
                    return (<Project {...props} />)
                });
            this.setState({projectSection: projectSection})
    }

    render(){
        const ProjectContainer = styled.div`
            width:100%;
            display:flex;
            justify-content: flex-end;
            background-color:black;
            padding-bottom:3em;
            &.ProjectTransition-appear {
                opacity:.01;

            }
            &.ProjectTransition-appear-active {
            opacity: 1;
            transition: opacity 500ms ease-out;

            }
        `;
        const CenterDiv = styled.div`
            width:85%;
            display:flex;
            flex-direction:column;
            justify-content: space-between;
        `;
        return(
                <ProjectContainer>
                    <CenterDiv>
                        {this.state.projectSection}
                    </CenterDiv>
                </ProjectContainer>
        )
    }
}
