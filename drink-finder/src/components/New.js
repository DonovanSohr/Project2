import React, { Component } from 'react';
import DrinkReturn from './DrinkReturn';
import axios from 'axios';

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
      currentView: '',
      searchDrink: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitDrinks = this.handleSubmitDrinks.bind(this);
    this.setView = this.setView.bind(this);
  }

  handleChange(evt) {
    const { drink, value } = evt.target;
    this.setState ({
     [drink]: value
   });
 }

 async handleSubmitDrinks(evt) {
   evt.preventDefault();
   await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
   this.getDrinks();
 }

 async getDrinks() {
   const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
   const drinks = res.data.drinks;
    this.setState({
      drinks: drinks
  });
}

  async componentDidMount() {
    this.getDrinks();
  }

  setView (view) {
 this.setState ({
   currentView: view
 });
}

  render() {
    return (
      <div className="App">
        <DrinkReturn
        drinks={this.state.drinks}
        getDrinks={this.getDrinks}
        />
      </div>
    );
  }
}

export default New;
