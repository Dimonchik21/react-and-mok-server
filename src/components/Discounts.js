import React, { Component } from 'react';
import axios from 'axios';

class Discounts extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.fetchDicount = this.fetchDicount.bind(this);
  }

  fetchDicount() {
    this.setState({ ...this.state, isFetching: true })
    axios.get('http://localhost:4000/institutions')
      .then(result => this.setState({
        post: result,
        isFetching: false
      }))
      .catch(e => console.log(e));
  }

  componentDidMount() {
    this.fetchDicount()
    console.log(this.post);
    // this.timer = setInterval(() => this.fetchUser(), 5000);
  }

  componentWillUnmount() {
    this.timer = null;
  }

  render() {
    const title = 'Quotes for ya!';
    return (
      <div>
        <span>{title}</span>
        {/* <span>{this.state.fetchDicount.title}</span> */}
      </div>
    );
  }
}

export default Discounts;