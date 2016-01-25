import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import '../../styles/core.scss'

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Stateless Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// CoreLayout is a pure function of its props, so we can
// define it with a plain javascript function...

const NavbarStatic = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <Link to='/' className="navbar-brand">Note Manager</Link>
                </div>
            </div>
        </nav>
    )
}

function CoreLayout({ children }) {
    return (
        <div>
            <NavbarStatic />
            <div className='container'>
                {children}
            </div>
        </div>
    )
}

CoreLayout.propTypes = {
    children: PropTypes.element
}

export default CoreLayout
