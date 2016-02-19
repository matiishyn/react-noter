import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';
import styles from './FolderTree.scss';

export default class FolderTree extends Component {
    constructor(props) {
        super(props)
    }

    renderFolder(directory) {
        return (
            <li key={directory.id}>
                <Link
                    activeClassName={styles.activeDirectory}
                    to={`/directory/${directory.id}`}
                >
                    <i className="fa fa-folder"></i>
                    <span>{directory.name}</span>
                </Link>
            </li>
        )
    }

    renderFolderStructure(directories) {
        return directories.map(this.renderFolder)

    }

    render() {
        let {directories} = this.props

        return (
            <div className={styles.folderTree}>
                <ul className="list-unstyled">
                    {this.renderFolderStructure(directories)}
                </ul>
            </div>
        )
    }
}

FolderTree.propTypes = {
    dictionaries: PropTypes.array
}