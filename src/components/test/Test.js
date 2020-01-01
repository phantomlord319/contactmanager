import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  /*
  componentWillMount() {
    console.log("component will mount");
  }
  componentDidUpdate() {
    console.log("It was updated.");
  } 
  componentWillUpdate(){
      console.log('It will update.')
  }
  componentWillReceiveProps(nextProps, nextState){
        console.log('componentWillREcieveProps.. ');
  }

  static getDerivedStateFromProps(nextProps, prevState){
      
  }*/

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
export default Test;
