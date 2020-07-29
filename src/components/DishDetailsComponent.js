import React from 'react';
import {  Card, CardImg, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';



function RenderDish({dish}){
            return(
              <Card>
                <CardImg width="100%" height="380px" src={dish.image} alt={dish.name} />
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
              </Card>
            );
          }

  function RenderComment({comment}) {
    return (
    comment.map((item) => {
      return(
        <div>
          <blockquote>{item.comment}</blockquote>
          <blockquote className="blockquote-footer"><b>{item.author}, {item.date} </b></blockquote>
      </div>
    );
    })
    );
  }
 
      
    function DishDetails(props) {
        return (
          <div className="container">  
            <div className="row">
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                  <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                  <h3>{props.dish.name}</h3>
                  <hr />
              </div>                
            </div>
            <div className="row mb-2 mt-2">
              <div className="col-md-6 col-12">
                <RenderDish dish={props.dish}/>
              </div>
              <div className="col-md-6 col-12">
                <RenderComment comment={props.comments}/>
              </div>
            </div>
          </div>
        );
    
}

export default DishDetails;

