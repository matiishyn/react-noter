import React, { Component, PropTypes } from 'react'
import styles from './styles.scss'  // CSS Modules

class MyComponent extends Component {
    render() {
        return (<div className={styles.myClass}>MyComponent...</div>)
    }
}

MyComponent.propTypes = {
    propFromUrlParam: PropTypes.func.isRequired,
    propFromState: PropTypes.func.isRequired,
    myAction: PropTypes.func.isRequired
}

export default MyComponent