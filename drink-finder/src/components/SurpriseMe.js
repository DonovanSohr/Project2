import React from 'react';

 export default function Random (props) {
  return (
    <div>
      <button className ='Refresh' onClick = {props.getRandomDrink}>Refresh</button>
      <div>
      {props.randomDrink.map(randomDrink => (
        <div key={randomDrink.id}>
          <h2>{randomDrink.strDrink}</h2>
          <p>{randomDrink.strIngredient1}</p>
          <p>{randomDrink.strMeasure1}</p>
          <img className = 'picture' src = {randomDrink.strDrinkThumb}/>
        </div>
      ))}
      </div>
    </div>
  )
}
