import React, { Component } from 'react'
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
    return (
        <>
            <Navbar dark>
                <div className="container">
                    <NavbarBrand href="/"> Restauranter con Fusion </NavbarBrand>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="row container row-header">
                    <div className="col-sm-6 col-12">
                    <h1>Restaurante con fusion</h1>
                    <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                    </div>
                </div>
            </Jumbotron>
        </>
        );

        }
}

export default Header;
