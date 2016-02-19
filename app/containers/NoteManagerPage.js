import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { loadDirectories, loadNotices } from '../actions'

// components
import Menu from '../components/Menu'
import FolderTree from '../components/FolderTree/FolderTree'
import Notices from '../components/Notices'


function loadData(props) {
    props.loadDirectories();
    props.loadNotices();
}


class NoteManagerPage extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        loadData(this.props)
    }


    render() {
        return (
            <div style={{ backgroundColor: 'beige'}} className="container">

                <h2>Note Manager</h2>

                <div style={{ backgroundColor: 'aquamarine' }}>
                    <Menu/>
                </div>

                <div style={{ backgroundColor: 'darkseagreen'}} className="col-md-3">
                    <FolderTree directories={this.props.directories}/>
                </div>

                <div style={{ backgroundColor: 'burlywood'}} className="col-md-9">
                    <Notices notices={this.props.notices} directoryId={this.props.directoryId}/>
                </div>

                <div style={{clear:'both'}}></div>
            </div>
        )
    }
}

NoteManagerPage.propTypes = {
    directoryId: PropTypes.string.isRequired,
    loadDirectories: PropTypes.func.isRequired,
    loadNotices: PropTypes.func.isRequired
}

function mapStateToProps(state, props) {
    let { directoryId} = props.params; // URL params
    let { directories, notices } = state;
    return {
        directories,
        notices,
        directoryId
    }
}

export default connect(mapStateToProps, {
    loadDirectories,
    loadNotices,
    push
})(NoteManagerPage)
