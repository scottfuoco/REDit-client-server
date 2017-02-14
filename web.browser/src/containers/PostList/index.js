import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Post from '../../components/Post';
import styles from './styles.css';
import { sortNewest, sortPopular } from '../../store/actions/posts';

class PostList extends Component {

  render() {
    const { posts, dispatch } = this.props;

    const ToolbarCSS = {
      margin: '0 0 10px',
      padding: '0 30px 0 50px',
      display: 'flex',
      alignItems: 'center',
      height: '60px'
    };

    const ToolbarHeight = {
      height: '60px'
    };

    const { pathname } = this.props;

    const activeLink = {
      backgroundColor: 'white',
    }

    const linkStyle = {
      textDecoration: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      padding: '0 1rem',
      color: 'black',
    }

    return (
      <div className={styles.postListContainer}>
        <Toolbar style={ToolbarCSS}>
          <ToolbarGroup firstChild={true} style={ToolbarHeight}>
            <ToolbarTitle text="Post" />
          </ToolbarGroup>

          <ToolbarGroup lastChild={true} style={ToolbarHeight}>
            <div className={styles.ToolbarRightContent}>
              <h3 className={styles.sortText}>Sort:</h3>
              <Link to={{ pathname, query: { sort: 'newest' } }} style={linkStyle} activeStyle={activeLink} onClick={() => dispatch(sortNewest())}>Newest</Link >
              <Link to={{ pathname, query: { sort: 'popular' } }} style={linkStyle} activeStyle={activeLink} onClick={() => dispatch(sortPopular())}>Popular</Link >
            </div>
          </ToolbarGroup>
        </Toolbar>
        {posts.length ?
          posts.map(post => <Post key={post.postid} post={post} />) :
          <div>Sorry, no posts in this lesson</div>
        }
      </div >
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
});

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(mapStateToProps)(PostList);