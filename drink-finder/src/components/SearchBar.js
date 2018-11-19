import React from 'react';
import '../App.css';

export default function SearchBar (props) {
  return (
    <form className = 'form' onSubmit = {props.handleSubmit}>
    <input
      type='text'
      name='searchDrink'
      placeholder='Browse Cocktails'
      onChange={props.handleChange}
      value={props.searchDrink}
      >
      </input>
  </form>
  )
}
