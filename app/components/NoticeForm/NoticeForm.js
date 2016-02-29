import React, { Component, PropTypes } from 'react'
import styles from './styles.scss'

export default class Notices extends Component {

    render() {
        return (
            <div>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="noticeTitle" className="col-sm-3 control-label">Title</label>
                        <div className="col-sm-9">
                            <input className="form-control" id="noticeTitle" placeholder="title"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noticeDescription"
                               className="col-sm-3 control-label">Description</label>
                        <div className="col-sm-9">
                                    <textarea name=""
                                              className="form-control"
                                              id="noticeDescription"
                                              cols="30"
                                              rows="3"
                                              placeholder="description"
                                    />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-3 col-sm-9">
                            <button type="submit" className="btn btn-primary">Save</button>
                            <button className="btn btn-default">Cancel</button>
                        </div>
                    </div>
                </form>
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
