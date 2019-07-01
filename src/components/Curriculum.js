import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

class Curriculum extends React.Component {
    render(){
        return(
            <Container>
                <Row>    
                    <Col xs={6} md={4}>
                    <Image src="https://cdn.onlinewebfonts.com/svg/img_76927.png" width="100px" height="100px" roundedCircle />
                    Si funciona el router Curriculum
                    </Col> 

                </Row>
            </Container>
        )
    }
}

export default Curriculum;