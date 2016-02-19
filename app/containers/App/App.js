import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Explore from '../../components/Explore'
import { resetErrorMessage } from '../../actions'

import styles from './App.scss'

class App extends Component {
    constructor(props) {
        super(props)

        // if no directoryId
        // todo fix it
        /*if(!props.directoryId) {
         props.push('/directory/1');
         }*/
    }

    renderErrorMessage() {
        const { errorMessage } = this.props
        if (!errorMessage) {
            return null
        }

        return (
            <p style={{ backgroundColor: '#e99', padding: 10 }}>
                <b>{errorMessage}</b>
                {' '}
                (<a href="#"
                    onClick={this.handleDismissClick}>
                Dismiss
            </a>)
            </p>
        )
    }

    /*
     <div className="hidden">
     <Explore value={inputValue}/>
     <hr />
     {this.renderErrorMessage()}
     </div>
     */
    render() {
        const { children, inputValue } = this.props
        return (
            <div className={styles.app}>
                <div className="container">
                    <h1>Note Manager</h1>
                </div>

                <hr/>
                {children}
                <hr/>
            </div>
        )
    }
}

App.propTypes = {
    // Injected by React Redux
    errorMessage: PropTypes.string,
    resetErrorMessage: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
    // Injected by React Router
    children: PropTypes.node
}

function mapStateToProps(state) {
    return {
        errorMessage: state.errorMessage,
        inputValue: state.routing.location.pathname.substring(1)
    }
}

export default connect(mapStateToProps, {
    resetErrorMessage,
    push
})(App)