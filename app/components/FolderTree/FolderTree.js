import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';
import styles from './FolderTree.scss';

export default class FolderTree extends Component {
    constructor(props) {
        super(props)
    }

    renderFolder(directory) {
        return (
            <li className={styles.link} key={directory.id}>
                <Link
                    styleName='link'
                    activeClassName="active-directory"
                    to={`/directory/${directory.id}`}
                >
                    {directory.name}
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
            <nav>
                {this.renderFolderStructure(directories)}
            </nav>
        )
    }
}

FolderTree.propTypes = {
    dictionaries: PropTypes.array
}