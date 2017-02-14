import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import slug from 'slug';
import { fetchPosts } from '../../store/actions/posts';

const width = {
    width: '100%'
}

const LinkCSS={
    textDecoration: 'none'
}

const Week = ({week, dispatch}) => {
    return (
        <List style={width}>
            <Subheader style={width} inset={false}>{week.title}</Subheader>
            <Divider style={width} />
            {week ? 
                week.lessons.map((lesson, i) => {
                return (
                    <Link
                        to={{
                            pathname:`/posts/${slug(lesson.lesson)}/${lesson.id}`
                        }}
                        onClick={() => dispatch(fetchPosts(lesson.id))}
                        key={i}
                        style={LinkCSS}>
                        <ListItem>{lesson.lesson}</ListItem>
                    </Link>

                )
            }) :
            <div></div>
        }
        </List>
    );
};

export default connect()(Week);