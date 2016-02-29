import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';
import styles from './App.scss'

function loadData(props) {
    // call actions
    props.loadDirectories();
    props.loadNotices();
}

class App extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        // todo Load data inside App
        loadData(this.props)
    }

    render() {
        const { children } = this.props
        return (
            <div className={styles.app}>
                <div className="container">
                    <h1><Link to="/directory/1"></Link>Note Manager</h1>
                </div>

                <hr/>
                {children}
                <hr/>
            </div>
        )
    }
}

App.propTypes = {
    loadDirectories: PropTypes.func.isRequired,
    loadNotices: PropTypes.func.isRequired,
    // Injected by React Router
    children: PropTypes.node
}

export default App
