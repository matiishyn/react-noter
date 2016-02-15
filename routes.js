import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import UserPage from './containers/UserPage'
import RepoPage from './containers/RepoPage'
import NoteManagerPage from './containers/NoteManagerPage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={NoteManagerPage}/>
        /*<Route path="/:login/:name" component={RepoPage}/>
        <Route path="/:login" component={UserPage}/>*/

    </Route>
)
