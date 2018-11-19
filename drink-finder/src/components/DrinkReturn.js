import React from 'react';
import '../App.css';

 export default function DrinkReturn (props) {
  return (
    <div>
    <div className='refresh'>
      <button onClick = {props.getDrinks}>Refresh</button>
    </div>

      <div className= 'app'>
      {props.drinks.map(drink => (
        <div key={drink.id}>
          <h2>{drink.strDrink}</h2>
          <div className= 'dropup'>
          <ul>
          <div className = 'dropdown'>
          <li>{drink.strMeasure1} of  <strong>{drink.strIngredient1}</strong></li>
          <li>{drink.strMeasure2} of <strong>{drink.strIngredient2}</strong></li>
          <li>{drink.strMeasure3} of <strong>{drink.strIngredient3}</strong></li>
          <li>{drink.strMeasure4}  <strong>{drink.strIngredient4}</strong></li>
          <li>{drink.strInstructions}</li>
          <li>{drink.strMeasure5}  <strong>{drink.strIngredient5}</strong></li>
          <li>{drink.strMeasure6}  <strong>{drink.strIngredient6}</strong></li>
          </div>
          </ul>
          </div>
          <div className= 'pic'>
          <img className = 'picture' src = {drink.strDrinkThumb}/>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}
