import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import App from './containers/App/App'
import NoteManagerPage from './containers/NoteManagerPage/NoteManagerPage'
import NoticePage from './containers/NoticePage/NoticePage'

export default (
    <Route path="/" component={App}>
        <Route path="directory/:directoryId" component={NoteManagerPage}/>
        <Route path="note/:noticeId" component={NoticePage}/>
    </Route>
)
