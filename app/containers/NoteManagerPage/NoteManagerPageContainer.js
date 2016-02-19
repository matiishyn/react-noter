import NoteManagerPage from './NoteManagerPage'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux'

import { setActiveDirectory } from '../../actions';
import { loadDirectories, loadNotices } from '../../actions'

function mapStateToProps(state, props) {
    let { directoryId} = props.params; // URL params
    let { directories, notices } = state;
    return {
        directories,
        notices,
        directoryId
    }
}


function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({
            loadDirectories,
            loadNotices,
            push
        }, dispatch)
    }
}

const NoteManagerPageContainer = connect(mapStateToProps, mapDispatchToProps)(NoteManagerPage);

export default NoteManagerPageContainer;