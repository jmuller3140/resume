import React from 'react';
import MediaQuery from 'react-responsive';

import Footer from './Footer';
import styled from 'styled-components';

const Home = () => {
    const HomeContainer = styled.div`
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding-bottom:5em;
        line-height:3em;
    `;
    const Content = styled.div`
        width:24em;
        margin-left:4em;
        padding-top:.5em;
        color:silver;
        font-size:20pt;
        font-family:Raleway-Regular;
    `;
//
//
//
    const HomeContainerMobile = styled.div`
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        padding-bottom:5em;
        line-height:2em;
    `;
    const ContentMobile = styled.div`
        width:17em;
        padding:1em;
        padding-top:3em;
        color:silver;
        font-size:12pt;
        font-family:Raleway-Regular;
    `;

    return(
        <div>
            <MediaQuery query="(min-device-width: 1224px)">
                <HomeContainer>
                    <Content>
                        Hello! I'm James,
                        a web developer constantly trying to get better at my craft, asthetically and technically.
                        <br/><br/>
                        I am passionate about working with new technologies and helping materialize people's application dreams into a reality.
                        <br/><br/>
                        Currently, I am looking for employment after returning from school.
                    </Content>
                </HomeContainer>
                <Footer />
            </MediaQuery>
            <MediaQuery query="(max-device-width: 1224px)">
                <HomeContainerMobile>
                    <ContentMobile>
                        Hello! I'm James,
                        a web developer constantly trying to get better at my craft, asthetically and technically.
                        <br/><br/>
                        I am passionate about working with new technologies and helping materialize people's application dreams into a reality.
                        <br/><br/>
                        Currently, I am looking for employment after returning from school.
                    </ContentMobile>
                </HomeContainerMobile>
                <Footer />
            </MediaQuery>
        </div>
        )
}

export default Home
