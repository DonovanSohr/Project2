import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import NavBar from './components/NavBar';
import SurpriseMe from './components/SurpriseMe';
import Welcome from './components/Welcome';

// BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomDrink: '',
      drinks: [],
      alcohol: '',
      garnish: '',
      glass: '',
      currentView: '',
      searchDrink: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setView = this.setView.bind(this);
  }

  handleChange(evt) {
    const { drink, value } = evt.target;
    this.setState ({
     [drink]: value
   });
 }

 async handleSubmit(evt) {
   evt.preventDefault();
   const  = {

   }
   await axios.post('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita', madePlanets)
   this.getDrinks();
 }

 async getDrinks() {
   const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
   const drinks = res.data.drinks;
    this.setState({
      drinks: drinks
  });
}

  async getRandomDrink() {
    const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    this.setState({
      randomPlanet: res.data.planet
    });
  }

  async componentDidMount() {
    this.getDrinks();
    this.getRandomDrinks();
  }

  setView (view) {
 this.setState ({
   currentView: view
 });
}

  getView () {
 const view = this.state.currentView;
 switch (view) {
  case 'DrinkReturn':
     return <Index
              drinks={this.state.drinks}
              getDrinks={this.getDrinks}
            />
  case 'SurpriseMe':
      return <Random
                randomDrink={this.state.randomDrink}
                getRandomDrinks={this.getRandomDrinks}
              />
   case 'Welcome':
     return <Welcome />
   default:
     return <Welcome />
 }
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <NavBar setView={this.setView}/>
        {this.getView()}
      </div>
    );
  }
}

export default App;
