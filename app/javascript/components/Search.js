import React, { Component } from 'react'

class Search extends Component {
  constructor(props){
  super(props)
  }
  render() {
    return(
      <div>
        <h1>Cryptocurrency Portfolio Caalculator</h1>
        <form action="">
          <div className="form-group" >
            <label>Search for currency: </label><br/>
            <input 
              onChange={this.props.handleChange}
              autoComplete="off" 
              type="text" 
              name="name" 
              placeholder="Ex: Bitcoin, Lightcoin, Ethereum... " 
              value={this.props.name} 
              className="filed"/>
          </div>
        </form>
      </div>
    )
  }
}

export default Search
