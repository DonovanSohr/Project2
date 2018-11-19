import React from 'react';

export default function SearchBar (props) {
  return (
    <form onSubmit = {props.handleSubmit}>
    <input
      type='text'
      name='searchDrink'
      placeholder='Whatcha lookin for'
      onChange={props.handleChange}
      value={props.searchDrink}
      >
      </input>
  </form>
  )
}
