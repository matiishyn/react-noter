import React, { Component, PropTypes } from 'react'

export default class FolderTree extends Component {
    constructor(props) {
        super(props)
    }

    renderFolder(directory) {
        return (<li key={directory.id}>{directory.name}</li>)
    }

    renderFolderStructure(directories) {
        return !directories.length || directories.map(this.renderFolder)

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
