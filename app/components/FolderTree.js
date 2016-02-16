import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class FolderTree extends Component {
    constructor(props) {
        super(props)
    }

    renderFolder(directory) {
        return (
            <li key={directory.id}>
                <Link
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
