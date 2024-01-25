import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'

import { PostsList } from './feature/posts/PostsList'
import { AddPostForm } from './feature/posts/AddPostForm'
import { EditPostForm } from './feature/posts/EditPostForm'
import { SinglePostPage } from './feature/posts/SinglePostPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                //
              </React.Fragment>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
