import NoteManagerPage from './NoteManagerPage'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux'

import { setActiveDirectory } from '../../actions'

function mapStateToProps(state, props) {
    let { directoryId} = props.params; // URL params
    let { directories, notices, activeDirectoryId } = state;
    return {
        directories,
        notices,
        directoryId,
        activeDirectoryId
    }
}


function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({
            setActiveDirectory,
            push
        }, dispatch)
    }
}

const NoteManagerPageContainer = connect(mapStateToProps, mapDispatchToProps)(NoteManagerPage);

export default NoteManagerPageContainer;