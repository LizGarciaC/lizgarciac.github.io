import React from "react";
import {Link} from "react-router-dom";
import { Carousel } from "react-bootstrap";

class Contact extends React.Component {
    render(){
        return(
            <div className="carouselDiv">
            <Carousel>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2019/03/pokemon-go_2.jpg?itok=rHm83EtV"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://blogjovenesconstruyendo.files.wordpress.com/2018/07/diehy59vmaep2cz.jpg?w=800"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://hddesktopwallpapers.in/wp-content/uploads/2015/11/master-chief-desktop-backgrounds.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
                </Carousel.Item>



                <Carousel.Item>
                <img
                    className="d-block w-50"
                    src="https://cdn.dribbble.com/users/2758529/screenshots/6137469/asset_2_2x.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Fourtd slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        </div>
        )
    }
}

export default Contact;