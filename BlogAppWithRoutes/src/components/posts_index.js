import React, { Component } from 'react';

class PostsIndex extends Component {
  componentWillMount() {
    console.log('This would be a good time to call an action creator to fetch posts');
  }

  render() {
    return (
      <div>List of Blog Posts</div>
    );
  }
}

export default PostsIndex;
