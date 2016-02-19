import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';
import styles from './Notices.scss'

export default class Notices extends Component {
    constructor(props) {
        super(props)
    }

    renderNotice(notice) {
        return (
            <Link to={`/note/${notice.id}`} key={notice.id} className={styles.notice}>
                <i className="fa fa-envelope-o"></i>
                <div>{notice.title}</div>
            </Link>
        )
    }

    renderNotices(notices) {
        if (!notices.length) {
            return `Nothing's found`;
        }
        return notices.map(this.renderNotice);
    }

    render() {
        let {notices, directoryId} = this.props;
        let filteredNotices = notices.filter(n => +n.directoryId === +directoryId);

        return (
            <div className={styles.notices}>
                {this.renderNotices(filteredNotices)}
            </div>
        )
    }
}

Notices.propTypes = {
    notices: PropTypes.array,
    directoryId: PropTypes.string.isRequired
}
