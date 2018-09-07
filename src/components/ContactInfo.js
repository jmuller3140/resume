import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const ContactInfo = () => {
    const ContactContainer = styled.div`
        display:flex;
        color:silver;
        justify-content:center;
        text-align:center;
        font-family: Raleway-Regular;
        letter-spacing:.1em;
        background-color:black;
        width:100%;
        margin-bottom:5em;
    `;
    const CenteringDiv = styled.div`
        width:30%;
        margin-top:5em;
    `;
    const Message = styled.div`
        font-size:60pt;
        font-family: Moon-Light;
    `;
    const ContactList = styled.div`
        display:flex;
        flex-direction:column;
        text-align:left;
        align-items:center;
        justify-content:center;
        margin-top:2em;
        padding:1em;
        border-radius:5px;
        background-color:black;
        font-size:15pt;
        line-height:2em;
    `;
    const ItemContainer = styled.div`
        width:100%;
        display:flex;
        justify-content:center;
    `;
    const Email = styled(TextField)`
        width:70%;
        text-align:left;
        font-size:20pt;
        margin:.1em;
        color:silver;
    `;
    const Label = styled.div`
        text-align:right;
        font-size:20pt;
        width:5em;
        margin-right:1em;
    `;
    const Anchor = styled.a`
        color:silver;

    `;


    return(
        <ContactContainer>
            <CenteringDiv>
                <Message>Inquire.</Message>
                <ContactList>
                    For any inquires please reach out at: <Anchor href="mailto:jmuller3140@gmail.com">jmuller3140@gmail.com</Anchor>
                </ContactList>
            </CenteringDiv>
        </ContactContainer>
        )
}

export default ContactInfo
