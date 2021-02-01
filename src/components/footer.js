import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';


function Footer() {
    return (
        <footer id='footerMargin'>
            <Container>
                <picture id='logo'></picture>
                <Row lg={8} xs={12}>
                    <Col className='footerCol' lg={2} xs={12}><a href='#'>Conditions d'utilisation</a></Col>
                    <Col className='footerCol' lg={2} xs={12}><a href='#'>Donnez-nous votre avis</a></Col>
                    <Col className='footerCol' lg={1} xs={12}><a href='#'>Aide</a></Col>
                    <Col className='footerCol' lg={3} xs={12}>Data provided by Marvel. © 2021 MARVEL</Col>
                    <Col className='footerCol' lg={2} xs={12}>M-E-S, Inc. ou ses filiales. © 2020-2021</Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;