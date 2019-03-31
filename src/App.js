import React, { Component } from 'react';
import Items from './components/Items'
import Sort from './components/Sort';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <div className="bunner">
                <a href="#">
                <img src="img/bunner.png" alt="img"/>
                </a>
            </div>
            <div className="content_bar">
                <div className="content_bar__title">
                    <h2>Заведения</h2>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                              <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Library</li>
                        </ol>
                    </nav>
                </div>
                <Sort/>
            </div>
            <div className="shop">
                <div className="container_fluid">
                    <Items/>
                </div>
            </div>
        </div>
      );
    }
  }
    
    export default App;
