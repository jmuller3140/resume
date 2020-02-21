import React from 'react';
import Service from '../components/Auth/AuthenticationTimeService';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';

export default class Signin extends React.Component {
    constructor(){
        super()
        this.state = {
            password: '',
            username: '',
            isAuth: false
        }
    }

    onChangePassword(input) {
        this.setState({password: input.target.value})
    }

    onChangeUsername(input) {
        this.setState({username: input.target.value})
    }

    onSubmit(e) {
        e.preventDefault()
        const {password, username} = this.state;
        const result = Service.isAuthenticated(password, username)
        this.setState({isAuth: result})
    }
    render() {
        const {username , password, isAuth} = this.state;
        return(
            <SigninContainer>
                {
                    isAuth && <Redirect to="/" />
                }
                <Form onSubmit={(e) => this.onSubmit.call(this, e)}>
                    <Input type='text' value={username} placeholder="Username" onChange={(e) => this.onChangeUsername.call(this, e)}/>
                    <Input type='password' value={password} placeholder="Password" onChange={(e) => this.onChangePassword.call(this, e)}/>
                    <Input type="submit" value="Submit" />
                </Form>
            </SigninContainer>
        )
    }

}

const SigninContainer = styled.div`
  position: absolute;
  top: -200px;
  left: 0;
  width: 100%;
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items:center;
  z-index:0;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    background-color:white;
    height: 200px;
    padding:5rem;
    border-radius: 5px;
`;
const Input = styled.input`
    margin-bottom: 15px;
    padding: .25rem;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    border-color: silver;
    outline: none;
`;