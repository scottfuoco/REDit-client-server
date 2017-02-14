import React, {Component} from 'react';
import styles from './styles.css';

class NotFound extends Component {
    render() {
        return (
            <div className={styles.PageNotFound}>
                <h1>Page Not Found</h1>
            </div>
        );
    }
}

export default NotFound;