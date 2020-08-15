import React from 'react';
import Loading from './LoadingComponent';
import {  Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseURL } from '../shared/baseUrl';

function RenderMenuItems({dish}){
    return(
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={baseURL + dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
        </Link>
    </Card>
   );
  }


function Menu(props) {
    const menu = props.dishes.map((dish) => {
      return (
        <div className="col-md-5" key={dish.id}>
          <RenderMenuItems dish={dish} isLoading={props.isLoading} errMess={props.errMess}/>
        </div>
      );
    });

    if(props.isLoading){
      return(
        <Container>
            <Row>
                <Loading />
            </Row>
        </Container>
      );
      }

    else if(props.errMess) {
      return(
        <Container>
          <Row>
            <h3> {props.errMess} </h3>
          </Row>
        </Container>
      );
    }
    
    else if(props.dishes){
      return (
        <div className="container">
          <div className="row ml-1">
            <Breadcrumb>
              <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
              <BreadcrumbItem active> Menu</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="row">
            {menu} 
          </div>
        </div>  
      );
    }

    
  else 
  return <div></div>
}

export default Menu;