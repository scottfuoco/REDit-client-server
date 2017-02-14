import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import styles from './style.css';
import { attemptLogin } from './actions';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(input, e) {
        const updateInputState = {};
        updateInputState[input] = e.target.value;
        this.setState(updateInputState);
    }

    render() {
        const { email, password } = this.state;
        const { loggedIn, dispatch } = this.props;
        return (
            loggedIn ?
                <Redirect to='/' /> :
                < Paper >
                    <Toolbar>
                        <ToolbarTitle text="Login" />
                    </Toolbar>

                    <div className={styles.form}>
                        <TextField hintText='Email'
                            floatingLabelText='Email'
                            onChange={(e) => this.handleInputChange('email', e)} />

                        <TextField hintText='Password'
                            floatingLabelText='Password'
                            onChange={(e) => this.handleInputChange('password', e)} />

                        <FlatButton onClick={() => dispatch(attemptLogin(email, password))} label='Login' />
                    </div>
                </Paper>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps)(Login);