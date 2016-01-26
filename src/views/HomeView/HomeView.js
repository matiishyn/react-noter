import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as directoriesActions } from '../../redux/modules/directories'
import classes from './HomeView.scss'

// importing components
import LeftHandMenu from 'components/leftHandMenu/LeftHandMenu';

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
    directories: state.directories,
    counter: state.counter
})


const Directories = () => {
    return (
        <div>
            DIRS
        </div>
    );
};

const NotesExplorer = () => {
    return (
        <div>
            Notes
        </div>
    );
};


export class HomeView extends React.Component {
    componentWillMount() {
        this.props.fetchDirectories()
    }
    render() {
        return (
            <div className={classes.homeView}>
                <div className={classes.leftHandMenu}>
                    <h4>Counter: {this.props.directories.counter}</h4>
                    <LeftHandMenu/>
                </div>
                <div className={classes.directories}>
                    <button onClick={()=>{this.props.fetchDirectories()}}>Fetch</button>
                    <button onClick={()=>{this.props.increment(1)}}>Inc</button>

                </div>
                <div className={classes.noteExplorer}>
                    <NotesExplorer/>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, directoriesActions)(HomeView)
