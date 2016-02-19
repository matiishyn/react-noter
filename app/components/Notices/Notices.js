import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';
import styles from './Notices.scss'

export default class Notices extends Component {
    componentWillReceiveProps(props) {
        props.setActiveDirectory(+props.directoryId)

    }

    renderNotice(notice) {
        return (
            <Link to={`/note/${notice.id}/${notice.directoryId}`} key={notice.id} className={styles.notice}>
                <i className="fa fa-envelope-o"/>
                <div>{notice.title}</div>
            </Link>
        )
    }

    renderNotices(notices) {
        return notices.map(this.renderNotice);
    }

    renderAddNewItem(activeDirectoryId) {
        return (
            <Link to={`/note/${activeDirectoryId}`} className={styles.notice}>
                <i className="fa fa-plus-circle"/>
                <div>Add new</div>
            </Link>
        )
    }

    render() {
        let props = this.props;
        let filteredNotices = props.notices.filter(n => +n.directoryId === +props.directoryId);

        return (
            <div className={styles.notices}>
                {this.renderNotices(filteredNotices)}
                {this.renderAddNewItem(props.activeDirectoryId)}
            </div>
        )
    }
}

Notices.propTypes = {
    notices: PropTypes.array,
    activeDirectoryId: PropTypes.number.isRequired,
    directoryId: PropTypes.string.isRequired,
    setActiveDirectory: PropTypes.func.isRequired
}
