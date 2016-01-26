import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as directoriesActions } from '../../redux/modules/directories'
import classes from './HomeView.scss'

// importing components
import LeftHandMenu from 'components/leftHandMenu/LeftHandMenu';
import Directories from 'components/directories/Directories';

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
    directories: state.directories
})

const NotesExplorer = () => {
    return (
        <div>
            Notes
        </div>
    );
};


export class HomeView extends React.Component {
    componentDidMount() {
        this.props.fetchDirectories()
    }
    render() {
        return (
            <div className={classes.homeView}>
                <div className={classes.leftHandMenu}>
                    <LeftHandMenu/>
                </div>
                <div className={classes.directories}>
                    <Directories/>
                </div>
                <div className={classes.noteExplorer}>
                    <NotesExplorer/>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, directoriesActions)(HomeView)
