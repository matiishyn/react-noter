import App from './App'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadDirectories, loadNotices } from '../../actions'


function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({
            loadDirectories,
            loadNotices
        }, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
