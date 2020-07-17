import React, { Component } from 'react'; 
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent'
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';
import { LEADERS  } from '../shared/leaders';
import { Switch, Route} from 'react-router-dom';    
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments : COMMENTS,
        leaders : LEADERS,
        promotions : PROMOTIONS        
    };
  } 

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {

    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/menu" component={() => <Menu dishes={this.state.dishes} />}/>
          <Route path="/contact" component={Contact} />
          <Redirect to="/home" />
        </Switch> 
        <Footer />
      </div>
    );
  }
}

export default Main;