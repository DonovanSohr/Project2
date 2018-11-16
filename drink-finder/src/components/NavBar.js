import React from 'react';


 export default function NavBar (props) {
  return (
    <div className='button'>
      <button
        className= 'homeButton'
        onClick={() => props.setView('Welcome')}>Welcome
      </button>
      <button
        className= 'secondButton'
        onClick={() => props.setView('SurpriseMe')}>Surprise Me
      </button>
      <button
        className= 'main'
        onClick={() => props.setView('DrinkReturn')}>Find Drinks
      </button>
    </div>
  );
}
