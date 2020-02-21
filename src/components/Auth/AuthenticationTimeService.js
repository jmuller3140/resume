import moment from 'moment';

class AuthenticationTime {
    constructor() {
        if(!AuthenticationTime.instance) {
            this.loggedInTimestamp = null;
            AuthenticationTime.instance = this;
        }

        return AuthenticationTime.instance
    }

    isAuthenticated(password, username) {
        let isAuthenticated = false;
        if(password === process.env.REACT_APP_PASSWORD && username === process.env.REACT_APP_USERNAME){
            this.loggedInTimestamp = moment();
            isAuthenticated = true;
        }
        return isAuthenticated;
    }

    checkAuthState() {
        const isAuth = moment().diff(this.loggedInTimestamp, 'minutes') < 60 ? true: false;
        if(!isAuth) {
            this.loggedInTimestamp = null;
            return false
        }
        return true
    }
}

const instance = new AuthenticationTime()
export default instance

