import React from 'react'
import classes from './leftHandMenu.scss'

export default class LeftHandMenu extends React.Component {
    render() {
        return (
            <div className={classes.main}>
                <ul className='list-unstyled text-center'>
                    <li>
                        <button className='btn btn-default'>Add</button>
                    </li>
                    <li>
                        <button className='btn btn-default'>Edit</button>
                    </li>
                    <li>
                        <button className='btn btn-default'>Remove</button>
                    </li>
                </ul>
            </div>
        )
    }
}
