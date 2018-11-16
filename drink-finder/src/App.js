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
      alcohol: '',
      garnish: '',
      glass: '',
      drinkName: '',
      currentView: '',
      searchDrink: '',
      drinkSubmit: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setView = this.setView.bind(this);
  }

  async getDrinks() {
    const req = axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const drinks = await req;
     this.setState({
       drinks: drinks.data.drinks
   });
 }

 async getRandomDrink() {
   const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    this.setState ({
      randomDrink: res.data.drinks
  });
}

  handleChange(evt) {
    const { drink, value } = evt.target;
    this.setState ({
     [drink]: value
   });
 }

 async handleSubmit(evt) {
   evt.preventDefault();
   this.setState ({
     searchDrink: this.state.searchDrink
     drinkSubmit: true
   })
   this.searchedDrink();
 }

 handleSearch(evt) {
   this.setState ({
     searchDrink: evt.target.value
   });
 }

async searchedDrink() {
  const req = axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.searchDrink}`);
  const searchDrink = req.data;
   this.setState({
     drinkName: searchDrink.data.drinks,
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
              searchDrink = {this.state.searchDrink}
              onChange = {this.handleDrink}
            />
  case 'DrinkReturn':
     return <DrinkReturn
              drinks={this.state.drinks}
              getDrinks={this.getDrinks}
            />
  case 'SurpriseMe':
      return <SurpriseMe
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
