import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { loadDirectories } from '../actions'

// components
import Menu from '../components/Menu'
import FolderTree from '../components/FolderTree'



function loadData(props) {
    props.loadDirectories();
}




class NoteManagerPage extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        loadData(this.props)
    }


    render() {
        const { directories } = this.props
        console.log(directories);
        return (
            <div style={{ backgroundColor: 'beige', padding: 10}}>
                <h2>Note Manager</h2>

                <div style={{ backgroundColor: 'aquamarine', padding: 10 }}>
                    <Menu/>
                </div>

                <div style={{ backgroundColor: 'darkseagreen', padding: 10, width: 200 }}>
                    <FolderTree/>
                </div>
            </div>
        )
    }
}

NoteManagerPage.propTypes = {
    loadDirectories: PropTypes.func.isRequired
}

function mapStateToProps(state, props) {
    let {directories} = state
    return {
        directories
    }
}

export default connect(mapStateToProps, {
    loadDirectories
})(NoteManagerPage)
