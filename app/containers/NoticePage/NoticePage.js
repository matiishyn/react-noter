import React, { Component, PropTypes } from 'react'
import NoticeForm from '../../components/NoticeForm/NoticeForm'
import styles from './NoticePage.scss'

class NoticePage extends Component {

    render() {
        let props = this.props;
        let {noticeId} = props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-3 col-md-6">

                        <h2>{noticeId ? 'Edit Note' : 'Create new note'}</h2>

                        <NoticeForm/>

                    </div>
                </div>
            </div>
        )
    }
}

NoticePage.propTypes = {
    noticeId: PropTypes.string,
    directoryId: PropTypes.string.isRequired,
    loadDirectories: PropTypes.func.isRequired,
    loadNotices: PropTypes.func.isRequired
}

export default NoticePage