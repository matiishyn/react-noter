import React, { Component, PropTypes } from 'react'
import styles from './styles.scss'

export default class NoticeForm extends Component {

    render() {
        console.log('NoticeForm',this.props.notice);
        let notice = this.props.notice;
        return (
            <div>

                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="noticeTitle" className="col-sm-3 control-label">Title</label>
                        <div className="col-sm-9">
                            <input className="form-control" id="noticeTitle" value={notice.title} placeholder="title"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noticeDescription"
                               className="col-sm-3 control-label">Description</label>
                        <div className="col-sm-9">
                                    <textarea name=""
                                              className="form-control"
                                              value={notice.description}
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

NoticeForm.propTypes = {
    notice: PropTypes.object.isRequired
}
