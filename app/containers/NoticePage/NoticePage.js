import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import NoticeForm from '../../components/NoticeForm/NoticeForm'
import styles from './NoticePage.scss'

class NoticePage extends Component {

    getCurrentNotice(noticeId) {
        return _.find(this.props.notices,{ id: +noticeId});
    }

    onCancel() {
        // todo
        if(history.length > 2){
            console.log('back');
            this.props.goBack();
        } else {
            console.log('DIR');
            this.props.push('directory/1');
        }

    }

    render() {
        let props = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-3 col-md-6">

                        <h2>{props.noticeId ? 'Edit Note' : 'Create new note'}</h2>

                        <NoticeForm
                            notice={this.getCurrentNotice(props.noticeId) || {}}
                            onCancel={this.onCancel.bind(this)}
                        />

                    </div>
                </div>
            </div>
        )
    }
}

NoticePage.propTypes = {
    noticeId: PropTypes.string,
    notices: PropTypes.array,
    directoryId: PropTypes.string.isRequired,
    push: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired
}

export default NoticePage