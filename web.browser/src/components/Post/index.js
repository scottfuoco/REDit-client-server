import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import ArrowDropUp from 'material-ui/svg-icons/navigation/arrow-drop-up';
//import Chip from 'material-ui/Chip';
import styles from './styles.css';
import { voteUp } from '../../store/actions/posts';
import { connect } from 'react-redux';

const flatButtonCSS = {
  textTransform: 'lowercase'
}

const PaperCSS = {
    width: '100%',
    padding: '1px 10px 5px',
    marginBottom: '15px',
    marginLeft: '20px'
}

// const ChipCSS = {
//     margin: '0 5px',
// }
          
const Post = ({ post, dispatch }) => {
    return (
        <Paper style={PaperCSS} zDepth={1}>
            <a href={post.link} className={styles.PostLink}><h2 className={styles.PostTitle}>{post.title}</h2></a>
            <p>{post.description}</p>
            <div className={styles.PostBottomRow}>
                <FlatButton onClick={() => dispatch(voteUp(post.postid))} label={`vote ${post.votes}`} style={flatButtonCSS} icon={<ArrowDropUp />}  />
                <div className={styles.chips}>
                </div>
            </div>
        </Paper>
    );
};

export default connect()(Post);