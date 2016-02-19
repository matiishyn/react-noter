import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import App from './containers/App'
import NoteManagerPage from './containers/NoteManagerPage/NoteManagerPage'

export default (
    <Route path="/" component={App}>
        <Route path="directory/:directoryId" component={NoteManagerPage}/>
    </Route>
)
