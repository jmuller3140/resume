import React from 'react';
import MediaQuery from 'react-responsive';
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
//
//------------------------------------
//
    const ContactContainerMobile = styled.div`
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
    const CenteringDivMobile = styled.div`
        width:75%;
        text-align:center;
        margin-top:5em;
    `;
    const MessageMobile = styled.div`
        font-size:45pt;
        text-align:center;
        font-family: Moon-Light;
    `;
    const ContactListMobile = styled.div`
        display:flex;
        flex-direction:column;
        text-align:center;
        align-items:center;
        justify-content:center;
        padding:1em;
        border-radius:5px;
        background-color:black;
        font-size:15pt;
        line-height:2em;
    `;

    return(
    <div>
        <MediaQuery query="(min-device-width: 1224px)">
            <ContactContainer>
                <CenteringDiv>
                    <Message>Inquire.</Message>
                    <ContactList>
                        For any inquires please reach out at: <Anchor href="mailto:jmuller3140@gmail.com">jmuller3140@gmail.com</Anchor>
                    </ContactList>
                </CenteringDiv>
            </ContactContainer>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
            <ContactContainerMobile>
                <CenteringDivMobile>
                    <MessageMobile>Inquire.</MessageMobile>
                    <ContactListMobile>
                        For any inquires please reach out at: <Anchor href="mailto:jmuller3140@gmail.com">jmuller3140@gmail.com</Anchor>
                    </ContactListMobile>
                </CenteringDivMobile>
            </ContactContainerMobile>
        </MediaQuery>
    </div>
        )
}

export default ContactInfo
