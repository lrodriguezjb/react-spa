import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header';
import Tourists from './components/Tourists';
import AddTourist from './components/AddTourist';
import About from './components/pages/About';
// import uuid from 'uuid'
import axios from 'axios';


import './App.css';


class App extends Component {
  state = {
    tourists: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => this.setState({tourists: res.data}))
  }

  markBooked = (id) => {
    this.setState({
      tourists: this.state.tourists.map(tourist => {
        if (tourist.id === id) {
          tourist.booked = !tourist.booked
        }
        return tourist;
      })
    })
  }

  //Delete Tourist
  delTourist = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ tourists: [...this.state.tourists.filter(tourist => tourist.id !== id)] }))
  }

  // Add Tourist
  addTourist = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      booked: false
    })
    .then(res => this.setState({ tourists: [...this.state.tourists, res.data]}));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTourist addTourist={this.addTourist} />
                <Tourists tourists={this.state.tourists} markBooked={this.markBooked} delTourist={this.delTourist} />
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
