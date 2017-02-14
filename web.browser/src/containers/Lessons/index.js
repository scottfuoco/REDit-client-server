import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import { fetchLessons } from '../../store/actions/weeks';

import Week from '../../components/Week';


const PaperCSS = {
    width: '250px',
    overflow: 'hidden',
    position: 'fixed',
    left: '0'
};

class Lessons extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(fetchLessons());
    }
    render() {
        const { weeks } = this.props;
        return (
            <Paper style={PaperCSS}>
                {weeks ?
                weeks.map(week => <Week key={week.weekid} week={week} />) :
                <p>Loading Weeks</p>
            }
            </Paper>
        )
    }
}

const mapStateToProps = state => {
    return {
        weeks: state.weeks
    }
}

export default connect(mapStateToProps)(Lessons);