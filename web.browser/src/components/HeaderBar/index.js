import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ImportContacts from 'material-ui/svg-icons/communication/import-contacts';
import { Link, Redirect } from 'react-router';
import { connect } from 'react-redux';
import style from './styles.css';
import { logout } from './actions';

const flatButtonCSS = {
  color: 'white'
}

const linkStyle = {
  height: '100%',
  color: 'white',
  textDecoration: 'none',
}

const HeaderBar = ({ loggedIn, dispatch }) => (
  <AppBar
    title="RED it"
    iconElementLeft={<IconButton><ImportContacts /></IconButton>}
    iconElementRight={
      <span>
        <Link to='/posts/new' style={linkStyle}>
          <FlatButton style={flatButtonCSS} label="Share a Link" />
        </Link>

        {
          loggedIn ?
            <FlatButton style={flatButtonCSS} label="Logout" onClick={() => dispatch(logout())} /> :

            <Link to='/login' style={linkStyle}>
              <FlatButton style={flatButtonCSS} label="Login" />
            </Link>
        }
      </span>
    }
  />
);

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
  }
}

export default connect(mapStateToProps)(HeaderBar);
