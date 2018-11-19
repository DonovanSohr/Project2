import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import NavBar from './components/NavBar';
import SurpriseMe from './components/SurpriseMe';
import Welcome from './components/Welcome';
import DrinkReturn from './components/DrinkReturn';
import SearchBar from './components/SearchBar';

// BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomDrink: '',
      drinks: [],
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
 }

 async getDrinks() {
   const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
   const drinks = res.data.drinks;
    this.setState({
      drinks: drinks
  });
}

  async getRandomDrink() {
    const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const drinks = res.data.drinks
    this.setState({
      randomDrink: drinks
    });
  }

  async componentDidMount() {
    this.getDrinks();
    this.getRandomDrink();
  }

  setView (view) {
 this.setState ({
   currentView: view
 });
}

  getView () {
 const view = this.state.currentView;
 switch (view) {
  case 'SearchBar':
      return <SearchBar
                handleSubmit = {this.handleSubmit}
                handleChange = {this.handleChange}
              />
  case 'DrinkReturn':
     return <DrinkReturn
              drinks={this.state.drinks}
              getDrinks={this.getDrinks}
            />
  case 'SurpriseMe':
      return <SurpriseMe
                randomDrink={this.state.randomDrink}
                getRandomDrink={this.getRandomDrink}
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
        <SearchBar
                  handleSubmit = {this.handleSubmit}
                  handleChange = {this.handleChange}
                />
        <NavBar setView={this.setView}/>
        {this.getView()}
      </div>
    );
  }
}

export default App;
