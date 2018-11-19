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
        onClick={() => props.setView('SurpriseMe')}>Bartender's Choice
      </button>
      <button
        className= 'mainSubmit'
        onClick={() => props.setView('DrinkReturn')}>Submit Search
      </button>
    </div>
  );
}
