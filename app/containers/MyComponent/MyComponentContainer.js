import MyComponent from './MyComponent'     // *presentational* component

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { myAction } from '../actions'         // actions

function mapStateToProps(state, props) {
    let { propFromUrlParam } = props.params; // prop from URL params
    let { propFromState } = state;
    return {propFromUrlParam, propFromState}
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({
            // mapping methods to component
            myAction
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
