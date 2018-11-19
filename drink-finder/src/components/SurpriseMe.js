import React from 'react';
import '../App.css';

 export default function Random (props) {
  return (
    <div>
    <div className ='refresh'>
      <button onClick = {props.getRandomDrink}>Refresh</button>
    </div>
    {props.randomDrink.map(randomDrink => (
      <div key={randomDrink.id}>
        <h2>{randomDrink.strdrink}</h2>
        <div className= 'dropup'>
        <ul>
        <div className = 'dropdown'>
        <li>{randomDrink.strMeasure1} of  <strong>{randomDrink.strIngredient1}</strong></li>
        <li>{randomDrink.strMeasure2} of  <strong>{randomDrink.strIngredient2}</strong></li>
        <li>{randomDrink.strMeasure3} of  <strong>{randomDrink.strIngredient3}</strong></li>
        <li>{randomDrink.strMeasure4}  <strong>{randomDrink.strIngredient4}</strong></li>
        <li>{randomDrink.strInstructions}</li>
        <li>{randomDrink.strMeasure5}  <strong>{randomDrink.strIngredient5}</strong></li>
        <li>{randomDrink.strMeasure6}  <strong>{randomDrink.strIngredient6}</strong></li>
        </div>
        </ul>
        </div>
        <div className= 'pic'>
        <img className = 'picture' src = {randomDrink.strDrinkThumb}/>
        </div>
      </div>
    ))}
    </div>
)
}
