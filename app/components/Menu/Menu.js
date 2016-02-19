import React, { Component, PropTypes } from 'react'
import styles from './Menu.scss'

export default class Menu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className={styles.appMenu}>
                <ul className="list-unstyled">
                    <li>
                        <a href="#">
                            <i className="fa fa-plus-square-o"></i>
                            <div>Add</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-pencil"></i>
                            <div>Edit</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-trash"></i>
                            <div>Remove</div>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

Menu.propTypes = {}
