import React, {Component} from 'react';
import styles from './styles.css';

class Welcome extends Component {
    render() {
        return (
            <div className={styles.welcomeCSS}>
                <h1>Welcome</h1>
            </div>
        );
    }
}

Welcome.propTypes = {

};

export default Welcome;