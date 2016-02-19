import React, { Component, PropTypes } from 'react'

import styles from './NoteManagerPage.scss'

// importing dump components
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
        // todo Load data inside App
        loadData(this.props)
    }


    render() {
        return (
            <div className="container sideBorders">
                <div className={styles.flexbox}>
                    <div>
                        <Menu/>
                    </div>

                    <div className="col-md-3">
                        <FolderTree directories={this.props.directories}/>
                    </div>

                    <div className="col-md-9">
                        <Notices
                            notices={this.props.notices}
                            directoryId={this.props.directoryId}
                        />
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

export default NoteManagerPage
