import React from 'react';
import Loading from './LoadingComponent';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Container, Row} from 'reactstrap';
import { baseURL } from '../shared/baseUrl';

function RenderCard({item, isLoading, errMess}) {
    if(isLoading) {
        return(
        <Container>
            <Row>
                <Loading />
            </Row>
        </Container>
        );
    }

    else if(errMess){
        return(
            <Container>
              <Row>
                <h3> {errMess} </h3>
              </Row>
            </Container>
          );
    }
    else if(item!=null) {
        return(
            <Card>
                <CardImg src={baseURL+ item.image} alt={item.name} />
                <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    else 
        return <div></div>
}

function Home(props) {
    return(
        <React.StrictMode>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md   m-1 d-flex align-items-stretch">
                        <RenderCard item={props.dish}
                         isLoading={props.dishesIsLoading} 
                         errMess={props.dishesErrMess}/>
                    </div>
                    <div className="col-12 col-md m-1 d-flex align-items-stretch">
                        <RenderCard item={props.promotion} 
                        isLoading={props.promotionsIsLoading}
                        errMess={props.promotionsErrMess} />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.leader} />
                    </div>
                </div>
            </div>
        </React.StrictMode>
    );
}

export default Home;