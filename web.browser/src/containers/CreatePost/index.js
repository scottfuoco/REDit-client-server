import React, { Component, PropTypes } from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';

import styles from './styles.css';
import { attemptCreatePost } from './actions';

class CreatePost extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            title: '',
            description: '',
            lesson: '',
            link: '',
            tags: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange(input, e) {
        const updateInputState = {};
        updateInputState[input] = e.target.value;
        this.setState(updateInputState);
    }

    handleSelectInputChange = (event, index, lesson) => this.setState({ lesson });

    render() {
        const { weeks, dispatch } = this.props;
        const { title, description, lesson, link, tags } = this.state;

        return (
            <Paper>
                <Toolbar>
                    <ToolbarTitle text="Share a New Link" />
                </Toolbar>
                <form className={styles.form}>
                    <TextField hintText='Title'
                        floatingLabelText='Title'
                        onChange={(e) => this.handleInputChange('title', e)} />

                    <TextField hintText='Description'
                        floatingLabelText='Description'
                        onChange={(e) => this.handleInputChange('description', e)} />

                    <SelectField
                        floatingLabelText="Lessons"
                        value={this.state.lesson}
                        onChange={this.handleSelectInputChange}>


                    </SelectField>

                    <TextField hintText='Link'
                        floatingLabelText='Link'
                        onChange={(e) => this.handleInputChange('link', e)} />

                    <TextField hintText='Tags'
                        floatingLabelText='Tags'
                        onChange={(e) => this.handleInputChange('tags', e)} />

                    <FlatButton onClick={() => dispatch(attemptCreatePost())} label='SUBMIT' />
                </form>
            </Paper>
        );
    }
}

const mapStateToProps = state => ({
    weeks: state.weeks,
});

export default connect(mapStateToProps)(CreatePost);