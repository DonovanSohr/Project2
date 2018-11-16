import React from 'react';

 export default function DrinkReturn (props) {
  return (
    <div>
      <button className='Refresh' onClick = {props.getDrinks}>Refresh</button>

      <div>
      {props.drinks.map(drink => (
        <div key={drink.id}>
          <h2>{drink.strDrink}</h2>
          <p>{drink.strIngredient1}</p>
          <p>{drink.strMeasure1}</p>
          <img className = 'picture' src = {drink.strDrinkThumb}/>
        </div>
      ))}
      </div>
    </div>
  )
}
