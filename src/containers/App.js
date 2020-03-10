import React, { Component } from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import CardList from '../components/CardList'; 
import 'tachyons';

/*
Smart(Container) Component:
  *keep track of state
	*pass data down to the dumb components as props
  *class-based
*/
class App extends Component{ // Create a class named "App" which will inherit the methods from the "Component" class, by using the extends keyword.
  constructor(){
    super(); // By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods:
    this.state = {
      doppelgangers: [],
      searchfield: ''
    }
  }

  componentDidMount(){  // you don't have to use arrow function; it is invoked immediately after a component is mounted (inserted into the tree).
    fetch('https://jsonplaceholder.typicode.com/users')  // a global method that provides an easy, logical way to fetch resources asynchronously across the network; differs from jQuery.ajax()
      .then(response => { return response.json(); })
      .then(users => { this.setState({doppelgangers: users}) })
  }

  onSearchChange = (event) => {  // must use arrow function cause it is not a build-in function
    this.setState({searchfield: event.target.value});
  }

  render(){
    const filterDoppels = this.state.doppelgangers.filter(doppel => {
      return doppel.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    if(this.state.doppelgangers.length === 0){
      return <h1 className='tc'>loading...</h1>
    }
    else{
      return(
        <div className='tc'>
          <h1 className='mt5 mb1 f1'>- DOPPELGANGER -</h1>
          <h2 className='mb4'>A User Generator</h2>
          <SearchBox searchChange={this.onSearchChange}/>
          <ErrorBoundary>
            {/* <Scroll> */}
              <CardList doppelgangers={filterDoppels} />
            {/* </Scroll> */}
          </ErrorBoundary>
        </div>
      );
    }
  }
}

export default App;
