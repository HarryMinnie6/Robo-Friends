import React, { Component } from 'react';

import CardList from '../components/CardList';
// import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: " "
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then(response => {
           return response.json() 
        })
        .then(users => {
            this.setState({robots: users})
        })
        
        
    }
//searching the robots
    onSearchChange = (event) => {
        this.setState( {searchField: event.target.value} )
       
    }
    render(){
        const searchedRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
      if (this.state.robots === 0) {
          return <h1> Loading </h1>
      } else {
        return (
            <div className='tc'>
                <h1 className='f1'>Robo Friends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <CardList robots={searchedRobots}/>
                </Scroll>
            </div>
        )
      }
        
    }
}
 

export default App