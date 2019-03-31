import React, { Component } from 'react';
import Element from './Element';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:4000/institutions');
    const data = await response.json();
    this.setState({data: data});
    console.log(this.state);
  }

  componentWillUnmount() {
    this.timer = null;
  }

  render() {
    return (
      <div className="row">
        {
          this.state.data.map((element, index) => {
            return (
              <Element state={element} key={index}/>
            );
          })
        }
      </div>
    )
  }
}

export default Items;