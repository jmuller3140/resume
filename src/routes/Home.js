import React from 'react';

import Footer from './Footer';
import styled from 'styled-components';

const Home = () => {
    const HomeContainer = styled.div`
        width:100%;
        height:100%;
        display:flex;
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

    return(
        <div>
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
        </div>
        )
}

export default Home
