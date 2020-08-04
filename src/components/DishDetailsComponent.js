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
        isModalOpen: false
      }
      this.toggleModal= this.toggleModal.bind(this);
    }

    toggleModal(){
      this.setState({
        isModalOpen : !this.state.isModalOpen
      })
    }

    handleSubmit(value){
      console.log(`The current state is ${JSON.stringify(value)}`)
      alert(`The current state is ${JSON.stringify(value)}`)
    }


  render(){    
        return (      
          <div className="container">  
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                  <ModalHeader toggle={this.toggleModal}>
                    <h3> Submit Comment </h3>
                  </ModalHeader>
                  <ModalBody>
                    <LocalForm onSubmit={(valueS) => this.handleSubmit(valueS)}>
                      <Row className="form-group">
                        <Label md={12} >Rating</Label>
                        <Col md={12}>
                        <Control.select model=".Rating" name="Rating" className="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Control.select>
                        </Col>
                      </Row>
                      <Row className="form-group">
                        <Label htmlFor="fullname" md={12}>Your Name</Label>
                        <Col md={12}>
                          <Control.text model=".fullname" name="fullname" id="fullname"
                            placeholder="Your name"
                            className="form-control"
                            validators={{required, maxLength: maxLength(20), minLength: minLength(5)}}
                          />
                          <Errors
                            className="text-danger"
                            model=".fullname"
                            show="touched"
                            messages={{
                              required: 'Required. ',
                              maxLength: 'Your name should contian less than 20 characters',
                              minLength: 'Your name should contain more than 5 characters'
                            }}
                          />
                        </Col>
                      </Row>
                      <Row className="form-group">
                        <Label htmlFor="comment" md={12}>Comment</Label>
                        <Col md={12}>
                          <Control.textarea model=".comment" id="comment" name="comment"
                            className="form-control" 
                            rows="6"
                          />
                        </Col>
                      </Row>
                      <Row className="form-group">
                        <Col md={{size:10}}>
                          <Button type="submit" color="primary" onClick={this.toggleModal}>
                            Submit   
                          </Button>
                        </Col>
                        </Row>
                    </LocalForm>
                  </ModalBody>
                </Modal>
              <div className="row">
                  <Breadcrumb>
                      <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                      <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                      <h3>{this.props.dish.name}</h3>
                      <hr />
                  </div>                
              </div>
              <div className="row mb-2 mt-2">
                <div className="col-md-6 col-12">
                  <RenderDish dish={this.props.dish} />
                </div>
                <div className="col-md-6 col-12">
                  <RenderComment comment={this.props.comments} />
                  <Button onClick={this.toggleModal} className="btn btn-outline-dark">
                  <span className="fa fa-comment"></span> Submit Comment
                  </Button>
                </div>
                </div>
            </div>
        );
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

function RenderComment({comment}){
  return(
  comment.map((item) =>{
    return (
      <div>
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

