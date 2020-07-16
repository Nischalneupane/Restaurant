import React, { Component } from 'react'; 
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Footer from './FooterComponent'
import { DISHES } from '../shared/dishes';
import { Switch, Route} from 'react-router-dom';    
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
    };
  } 

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
  

    const HomePage = () => {
      return <Home dishes={this.state.dishes}/>
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/menu" component={() => <Menu dishes={this.state.dishes} />}/>
          <Redirect to="/home" />
        </Switch> 
        <Footer />
      </div>
    );
  }
}

export default Main;