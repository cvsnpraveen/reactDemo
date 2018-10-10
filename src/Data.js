import React, { Component } from 'react';
// import { Card, CardContent } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Data extends Component {
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { data } = this.props;
    console.log("this==>", this);
    console.log("this.props==>", this.props);
    return (
      <table border="1">
        <tbody>
          <tr><td width="5%"><Link to={'/'+data.id} onClick={this.handleChange} >{data.id}</Link></td><td  width="25%">{data.title}</td><td width="70%">{data.body}</td></tr>
        </tbody>
      </table>
    );
  }
}

export default Data;