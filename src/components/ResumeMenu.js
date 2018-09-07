import React from 'react';

import Education from './Education';
import Work from './WorkExperience';
import Research from './Research';
import styled from 'styled-components';

export default class ResumeMenu extends React.Component{
    constructor(){
        super();
        this.state = {educationSection:"", workSection:"", researchSection: ""};
    }

    componentDidMount(){
        /*loading education section*/
            let educationArray = {education :
                [{school: "University of Pittsburgh", degree:"Bachelor's Degree in Information Science", minor: "Concentrated Area in Computer Science", gpa:"3.425", graduated: "May 2014"},
                 {school: "St. John's University", degree:"Certificate in Philosophy", minor: "", gpa:"3.98", graduated: "May 2017"}]};
            let educationSection = educationArray.education.map((post) => {
                    let props = {school: post.school, degree: post.degree, minor: post.minor, gpa: post.gpa, graduated: post.graduated};
                    return (<Education {...props} />)
                });
            this.setState({educationSection: educationSection})
        /*loading work experience section*/
            let workArray = {work :
                [{company: "Indepedence Blue Cross", jobTitle:"Web Developer", projects: "Blue Button, Provider Finder", technology:"Javascript, jQuery, KonyOne, Java"},
                 {company: "PPG Industries", jobTitle:"Web Developer Intern", projects: "Refinish User Administration", technology:".Net, C#"}]};
            let workSection = workArray.work.map((post) => {
                    let props = {company: post.company, jobTitle: post.jobTitle, projects: post.projects, technology: post.technology};
                    return (<Work {...props} />)
                });
            this.setState({workSection: workSection});
            /*loading research experience section*/
            let researchArray = {research :
                [{school: "University of Pittsburgh", program:"iSchool Inclusion Institute", title:"i3 Scholar Fully Funded Researcher", projects: "Social Media usage during Hurricane Sandy"}]};
            let researchSection = researchArray.research.map((post) => {
                    let props = {school: post.school, program: post.program, title: post.title, projects: post.projects};
                    return (<Research {...props} />)
                });
            this.setState({researchSection: researchSection});
    }
    render(){
        const ResumeContainer = styled.div`
            padding-bottom:5em;
            background-color: black;
        `;
        const SectionContainer = styled.div`
            display:inline-flex;
            justify-content: flex-start;
            background-color:black;
            width:100%;
        `;
        const MenuContainer = styled.div`
            background-color: black;
            padding-top:.2em;
            color:silver;
            display:flex;
            justify-content: flex-start;
            flex-direction:column;
            font-family: Raleway-Regular;
            font-size: 20pt;
            text-align:right;
            margin-left:9.6em;
            width:10em;
        `;
        const MenuItem = styled.div`
            margin: 1em;
            letter-spacing: .1em;
        `;
        const EducationContainer = styled.div`
            display:flex;
            flex-direction:column;
            justify-content: flex-start;
            margin-left:5em;
            text-align:left;
            width:495px;
            padding-bottom:2em;
        `;
            return(
            <ResumeContainer>
                <SectionContainer>
                    <MenuContainer>
                        <MenuItem>Education</MenuItem>
                    </MenuContainer>
                    <EducationContainer>
                        {this.state.educationSection}
                    </EducationContainer>
                </SectionContainer>
                <SectionContainer>
                <MenuContainer>
                    <MenuItem>Work Experience</MenuItem>
                </MenuContainer>
                <EducationContainer>
                        {this.state.workSection}
                </EducationContainer>
                </SectionContainer>
                <SectionContainer>
                <MenuContainer>
                    <MenuItem>Research Experience</MenuItem>
                </MenuContainer>
                <EducationContainer>
                        {this.state.researchSection}
                </EducationContainer>
                </SectionContainer>
            </ResumeContainer>
        )
    }
}
