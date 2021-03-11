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
                <picture className='logoFooter'></picture>
                <Row lg={8} xs={12}>
                    <Col className='footerCol' lg={2} xs={12}><a href='https://marvel.com' target="_blank" rel='noreferrer'>Data provided by Marvel. © 2021 MARVEL</a></Col>
                    <Col className='footerCol' lg={2} xs={12}>M-E-S, Inc. or its subsidiaries. © 2020-2021</Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;