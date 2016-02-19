import React, { Component, PropTypes } from 'react'

import styles from './NoteManagerPage.scss'

// importing dump components
import Menu from '../../components/Menu/Menu'
import FolderTree from '../../components/FolderTree/FolderTree'
import Notices from '../../components/Notices/Notices'


function loadData(props) {
    // call actions
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
        let props = this.props;
        return (
            <div className="container sideBorders">
                <div className={styles.flexbox}>
                    <div>
                        <Menu/>
                    </div>

                    <div className="col-md-3">
                        <FolderTree directories={props.directories}/>
                    </div>

                    <div className="col-md-9">
                        <Notices
                            notices={props.notices}
                            activeDirectoryId={props.activeDirectoryId}
                            directoryId={props.directoryId}
                            setActiveDirectory={props.setActiveDirectory}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

NoteManagerPage.propTypes = {
    activeDirectoryId: PropTypes.number.isRequired,
    directoryId: PropTypes.string.isRequired,
    loadDirectories: PropTypes.func.isRequired,
    loadNotices: PropTypes.func.isRequired
}

export default NoteManagerPage
