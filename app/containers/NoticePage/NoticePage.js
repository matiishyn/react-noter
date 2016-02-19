import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { loadDirectories, loadNotices } from '../../actions'
import styles from './NoticePage.scss'


function loadData(props) {
    props.loadDirectories();
    props.loadNotices();
}


class NotePage extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="container sideBorders">
                <div className="row">
                    <div className="col-md-offset-3 col-md-6">





                        <form className="form-horizontal">
                            <div className="form-group">
                                <label htmlFor="noticeTitle" className="col-sm-2 control-label">Title</label>
                                <div className="col-sm-10">
                                    <input className="form-control" id="noticeTitle" placeholder="title"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="noticeDescription" className="col-sm-2 control-label">Description</label>
                                <div className="col-sm-10">
                                    <textarea name="" className="form-control"
                                              id="noticeDescription"
                                              cols="30"
                                              rows="3"
                                              placeholder="description"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="submit" className="btn btn-default">Sign in</button>
                                </div>
                            </div>
                        </form>





                    </div>
                </div>
            </div>
        )
    }
}

NotePage.propTypes = {
    noticeId: PropTypes.string.isRequired,
    loadDirectories: PropTypes.func.isRequired,
    loadNotices: PropTypes.func.isRequired
}

function mapStateToProps(state, props) {
    let { noticeId} = props.params; // URL params
    let { directories, notices } = state;
    return {
        directories,
        notices,
        noticeId
    }
}

export default connect(mapStateToProps, {
    loadDirectories,
    loadNotices,
    push
})(NotePage)