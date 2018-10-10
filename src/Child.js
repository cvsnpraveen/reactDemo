import React, { Component } from 'react';
class Child extends Component {
  state = {
    posts: []
  };

  componentDidMount(){
    const {id} = this.props.match.params;

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response=>Response.json())
    .then(posts=>this.setState({posts: posts[id-1]}))
  }

  render() {
    var {posts} = this.state;
    console.log("TEST2",this.props);
    return (
      <table border="1">
        <tbody>
          <tr><td  width="5%">{posts && posts.id}</td><td  width="25%">{posts && posts.title}</td><td width="70%">{posts && posts.body}</td></tr>
        </tbody>
      </table>
    );
  }
}
export default Child;