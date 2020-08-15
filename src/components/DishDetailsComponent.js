import React, { Component } from 'react';
import {  Card, CardImg, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button,Modal, ModalHeader, ModalBody, Label, Row, Col } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form'
import { Link } from 'react-router-dom';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
  
class DishDetails extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isModalOpen: false,
      }
      this.toggleModal= this.toggleModal.bind(this);
    }

    toggleModal(){
      this.setState({
        isModalOpen : !this.state.isModalOpen
      })
    }

    handleSubmit(values){
      // alert(JSON.stringify(values));
      this.props.addComment(this.props.dish.id,values.rating, values.author, values.comment);
    }


  render(){  
    if(this.props.dish!=null){
        return (      
              <div></div>
            );
    }
  }
}

function RenderDish({dish}){
  return(
    <Card>
      <CardImg width="100%" height="380px" src={dish.image} alt={dish.name} />
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
    </Card>
  );
}

function RenderComment({comment }){
  return(
  comment.map((item) =>{
    return (
      <div key={item.id}>
        <blockquote>{item.comment}</blockquote>
        <blockquote className="blockquote-footer"><b>{item.author},
          {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))}</b>
        </blockquote>
    </div>
  );
  })
  )
}
export default DishDetails;

