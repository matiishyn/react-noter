import React, { Component, PropTypes } from 'react'
import styles from './styles.scss'

export default class NoticeForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: this.props.notice.title,
            description: this.props.notice.description
        }
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            title: nextProps.notice.title,
            description: nextProps.notice.description
        })
    }

    cancelHandler(e) {
        e.preventDefault();
        this.props.onCancel();
    }

    render() {
        //let notice = this.props.notice;
        return (
            <div>

                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="noticeTitle" className="col-sm-3 control-label">Title</label>
                        <div className="col-sm-9">
                            <input
                                onChange={this.handleChange.bind(this)}
                                name="title"
                                className="form-control" id="noticeTitle"
                                value={this.state.title} placeholder="title"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noticeDescription"
                               className="col-sm-3 control-label">Description</label>
                        <div className="col-sm-9">
                                    <textarea name="description"
                                              className="form-control"
                                              value={this.state.description}
                                              id="noticeDescription"
                                              cols="30"
                                              rows="3"
                                              placeholder="description"
                                              onChange={this.handleChange.bind(this)}
                                    />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-3 col-sm-9">
                            <button type="submit" className="btn btn-primary">Save</button>
                            <button className="btn btn-default" onClick={this.cancelHandler.bind(this)}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

NoticeForm.propTypes = {
    notice: PropTypes.object.isRequired,
    onCancel: PropTypes.func.isRequired
}
