import React, { Component } from 'react'
import Calculate from './Calculate'
import Search from './Search'
import axios from 'axios' 

class PortfolioContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      portfolio: [],
      search_result: [],
      active_currency: null,
      amount: '' 
    }
    
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    axios.post('https://localhost:3000/search', {
      name: this.state.name
    })
    .then((data) => {
      debugger
    })
    .catch( () => {
      debugger
    })
    
    console.log(this.state.name)
  }

  render(){
    return(
      <div>
        <Search handleChange={this.handleChange}/>
        <Calculate />
      </div>
    )
  }
} 

export default PortfolioContainer