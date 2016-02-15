import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import App from './containers/App'
import UserPage from './containers/UserPage'
import RepoPage from './containers/RepoPage'
import NoteManagerPage from './containers/NoteManagerPage'

export default (
    <Route path="/" component={App}>
        <Route path="directory/:directoryId" component={NoteManagerPage}/>
        /*<Route path="/:login/:name" component={RepoPage}/>
        <Route path="/:login" component={UserPage}/>*/

    </Route>
)
