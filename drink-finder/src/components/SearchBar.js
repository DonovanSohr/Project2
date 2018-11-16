import React from 'react';

class SearchBar extends Component {
  render() {
  return (
    <form onSubmit = {props.handleSubmit}>
    <input
      type= 'text'
      name= 'SearchDrink'
      placeholder= 'Alcohol Prference'
      onChange= {props.handleChange}
      value= {this.props.searchDrink}
      >
    <button type= 'submit' value= 'submit'>Submit</button>
    </form>
  )
}
}
