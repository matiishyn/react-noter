import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { loadDirectories, loadNotices } from '../../actions'
import styles from './NoteManagerPage.scss'

// components
import Menu from '../../components/Menu/Menu'
import FolderTree from '../../components/FolderTree/FolderTree'
import Notices from '../../components/Notices/Notices'


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
            <div className="">

                <div className="container">
                    <h1>Note Manager</h1>
                </div>

                <hr/>

                <div className="container">
                    <div  className={styles.flexbox}>
                        <div>
                            <Menu/>
                        </div>

                        <div className="col-md-3">
                            <FolderTree directories={this.props.directories}/>
                        </div>

                        <div className="col-md-9">
                            <Notices notices={this.props.notices} directoryId={this.props.directoryId}/>
                        </div>
                    </div>
                </div>

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
