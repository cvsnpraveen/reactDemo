import React, { Component } from 'react';
import Data from './Data';
class About extends Component {
  state = {
    posts: []
  };

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response=>Response.json())
    .then(posts=>this.setState({posts}))
  }

  render() {
    const { posts } = this.state;
    return (
        <div>
            {posts&& posts.map((o, i)=><Data key={i} data={o} />)}    
        </div>
    );
  }
}
export default About;