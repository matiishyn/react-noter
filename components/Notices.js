import React, { Component, PropTypes } from 'react'

export default class Notices extends Component {
    constructor(props) {
        super(props)
    }

    renderNotice(notice) {
        return (
            <div key={notice.id} style={{border: "1px solid black"}}>
                <strong>{notice.title}</strong>
            </div>
        )
    }

    renderNotices(notices) {
        return notices.map(this.renderNotice);
    }

    render() {
        let {notices, directoryId} = this.props
        let filteredNotices = notices.filter(n => +n.directoryId === +directoryId);

        return (
            <nav>
                {this.renderNotices(filteredNotices)}
            </nav>
        )
    }
}

Notices.propTypes = {
    notices: PropTypes.array,
    directoryId: PropTypes.string.isRequired
}
