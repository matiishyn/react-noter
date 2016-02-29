import NoticePage from './NoticePage'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import { loadDirectories, loadNotices } from '../../actions'

function mapStateToProps(state, props) {
    let { noticeId, directoryId} = props.params; // URL params
    let { directories, notices } = state;
    return {
        directories,
        notices,
        noticeId,
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

export default connect(mapStateToProps, mapDispatchToProps)(NoticePage)
