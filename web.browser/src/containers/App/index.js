import React, { Component } from 'react';

import Lessons from '../Lessons';
import PostList from '../PostList';
import Login from '../Login';
import Welcome from '../Welcome';
import NotFound from '../../components/NotFound';
import HeaderBar from '../../components/HeaderBar';
import CreatePost from '../CreatePost';
import styles from './styles.css'

import { Match, Miss } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className={styles.mainLayout}>
        <HeaderBar />
        <div className={styles.app}>
          <Lessons />
          <Match exactly pattern='/' component={Welcome} />
          <Match exactly pattern='/posts/:lessonTitle/:lessonId' component={PostList} />
          <Match exactly pattern='/posts/new' component={CreatePost} />
          <Match pattern='/login' component={Login} />
          <Miss component={NotFound} />
        </div>
      </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object,
// };

export default App;
