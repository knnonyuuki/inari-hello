import React, { Component } from 'react';
import './App.css';
import CommentBox from "./CommentBox"
import PostBody from "./PostBody"
import store from './store'
import {Provider} from 'react-redux'
class App extends Component {
  render() {
    return (
        <Provider store={store}>
                <div>
                    <PostBody />
                    <CommentBox />
                </div>
        </Provider>
    )
  }
}
export default App;
