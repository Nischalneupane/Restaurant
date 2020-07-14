import React from 'react';
import {  Card, CardImg, CardTitle, CardText } from 'reactstrap';



function RenderDish({dish}){
          if (dish!= null){
            return(
              <div class="row mb-2">
              <div className="col-md-5 col-12">
              <Card>
                <CardImg width="100%" height="380px" src={dish.image} alt={dish.name} />
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
              </Card>
              </div>
              <div className="col-md-5 col-12 comments">
                  <h1>Comments</h1>
                  {dish.comments.map((info) => {
                    return(
                      <div>
                        <blockquote>{info.comment}</blockquote>
                        <blockquote className="blockquote-footer"><b>{info.author}, {info.date} </b></blockquote>
                      </div>
                    );
                  })
                  }
              </div>
              </div>
            );
          }
          else {
            return <div></div>
          }
        }
      
    function DishDetails(props) {
        return (
          <div className="container">  
              <RenderDish dish={props.dish}/>
          </div>
        );
    
}

export default DishDetails;