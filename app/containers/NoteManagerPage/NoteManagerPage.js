import React, { Component, PropTypes } from 'react'

import styles from './NoteManagerPage.scss'

// importing dumb components
import Menu from '../../components/Menu/Menu'
import FolderTree from '../../components/FolderTree/FolderTree'
import Notices from '../../components/Notices/Notices'

class NoteManagerPage extends Component {
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
    directoryId: PropTypes.string.isRequired
}

export default NoteManagerPage
