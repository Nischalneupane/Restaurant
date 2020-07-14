import React from 'react';
import {  Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderMenuItems({dish, onClick}){
  return(
  <Card key={dish.id} onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
  </Card>
  );
}



function Menu(props) {
  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-md-5" key={dish.id}>
        <RenderMenuItems dish={dish} onClick={props.onClick}/>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        {menu} 
    </div>
    </div>  
  );
}

export default Menu;