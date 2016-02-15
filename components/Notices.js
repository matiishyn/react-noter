import React, { Component, PropTypes } from 'react'

export default class Notices extends Component {
    constructor(props) {
        super(props)
    }

    renderNotice(notice) {
        return (
            <div key={notice.id} style={{border: "1px solid black"}}>
                <h3>{notice.title}</h3>
                <p>{notice.description}</p>
            </div>
        )
    }

    renderNotices(notices) {
        return !notices.length || notices.map(this.renderNotice);
        /*
         description
         :
         "Some description"
         directoryId
         :
         "3"
         id
         :
         7
         position
         :
         0
         tags
         :
         "tag1,tag2"
         title
         :
         "Note for Child Dir 12"
         */
    }

    render() {
        let {notices} = this.props

        return (
            <nav>
                {this.renderNotices(notices)}
            </nav>
        )
    }
}

Notices.propTypes = {
    notices: PropTypes.array
}
