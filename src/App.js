import React, { Component } from 'react';
import './App.css';
import CommentBox from "./CommentBox"
import PostBody from "./PostBody"
class App extends Component {
  render() {
    return (
        <div>
          <PostBody />
          <CommentBox />
        </div>
    )
  }
}

export default App;
