import React from 'react';
import AuthenticationTimeService from './AuthenticationTimeService';
import moment from 'moment';
import {Redirect} from 'react-router-dom';

export default (Component) => {
    const isAuth = AuthenticationTimeService.checkAuthState()
    return class extends React.Component{
        render() {
            return isAuth ? <Component /> : <Redirect to="/signin" />
        }
    }
}
  