import React, { useState } from "react";
import { useRef, useEffect } from "react";
import emailjs from 'emailjs-com';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import "./App.css";
import { motion } from "framer-motion";


function App() {

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);


  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_8y585qi', 'template_rlv171e', e.target, 'LS0KcXi3uPgexxbgJ')
      .then((result) => {
        window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
        console.log(error.text);
      });
  }

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    errors: {},
    loading: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};

    // Check if username is empty
    if (!formData.username) {
      errors.username = "Username is required";
    }

    // Check if password is empty
    if (!formData.password) {
      errors.password = "Password is required";
    }

    setFormData((prevState) => ({ ...prevState, errors }));
    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData({
      ...formData,
      loading: true,
    });

    // Simulate form submission delay
    setTimeout(() => {
      console.log(formData);
      setFormData({
        ...formData,
        loading: false,
      });
    }, 2000);
  };

  const divStyle = {
    width: '100vw',
    //background-size: cover,
    backgroundPosition: 'center',
    height: 500,
    //flex: 1,
    //width: null
    //width: '88%',
    //height: '800px',
    //backgroundImage: `url(${imgMyimageexample})`,
    //backgroundSize: 'cover'   <---- This is important
  };


  function getStars(rating) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating - 1 < i) {
        stars.push(<span>☆</span>);
      } else {
        stars.push(<span>★</span>);
      }
    }
    return stars;
  }

  const RATING_DATA = [
    { name: 'Manga1', rating: 1, comment: 'It is good' },
    { name: 'Manga2', rating: 4, comment: 'It is great' },
    { name: 'Manga3', rating: 5, comment: 'It is fantastic' },
    { name: 'Manga4', rating: 0, comment: 'It is brilliant' },
    { name: 'Manga5', rating: 2, comment: 'It is bravo' },
  ];

  const scrollRef = useRef(null)
  /*const transition = {
    delay: 0.2
  }*/
  return (
    <>
      <div className="MainContainer">
        <Navbar bg="" style={{ backgroundColor: '#253037' }} data-bs-theme="dark" sticky="top">
          <Container>
            <Navbar.Brand style={{ paddingLeft: '1.5rem' }}><img src={"logo2.png"} /></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="#services" style={{ paddingRight: '1.5rem' }}><h4>SERVICES</h4></Nav.Link>
              <Nav.Link href="#reviews" style={{ paddingRight: '1.5rem' }}><h4>REVIEWS</h4></Nav.Link>
              <Nav.Link href="#contact" style={{ paddingRight: '1.5rem' }}><h4>CONTACT US</h4></Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div>
          <Image src={"building7.png"} style={divStyle} fluid />
          <br /><br />
        </div>


        <div id='services'>
          <CardGroup className="CardFormatting">
            <Card.Header style={{ marginTop: '0.3rem', marginBottom: '1rem' }}><h2>Services</h2></Card.Header>
          </CardGroup>
          <CardGroup className="CardFormatting">
            <Badge bg="" style={{ backgroundColor: '#b76e79', marginRight: '2rem', marginLeft: '2rem', marginTop: '1rem', marginBottom: '1rem', paddingRight: '3rem', paddingLeft: '3rem', paddingTop: '1rem', paddingBottom: '1rem', fontSize: 20 }}>Real Estate</Badge>

            <Badge bg="" style={{ backgroundColor: '#6cb7ab', marginRight: '2rem', marginLeft: '2rem', marginTop: '1rem', marginBottom: '1rem', paddingRight: '3rem', paddingLeft: '3rem', paddingTop: '1rem', paddingBottom: '1rem', fontSize: 20 }}>Residential</Badge>

            <Badge bg="" style={{ backgroundColor: '#1a9ae3', marginRight: '2rem', marginLeft: '2rem', marginTop: '1rem', marginBottom: '1rem', paddingRight: '3rem', paddingLeft: '3rem', paddingTop: '1rem', paddingBottom: '1rem', fontSize: 20 }}>CAR Financing</Badge>

            <Badge bg="" style={{ backgroundColor: '#915c83', marginRight: '2rem', marginLeft: '2rem', marginTop: '1rem', marginBottom: '1rem', paddingRight: '3rem', paddingLeft: '3rem', paddingTop: '1rem', paddingBottom: '1rem', fontSize: 20 }}>Income Tax</Badge>

            <Badge bg="" style={{ backgroundColor: '#6cb7ab', marginRight: '2rem', marginLeft: '2rem', marginTop: '1rem', marginBottom: '1rem', paddingRight: '3rem', paddingLeft: '3rem', paddingTop: '1rem', paddingBottom: '1rem', fontSize: 20 }}>Commercial</Badge>

          </CardGroup>
          <CardGroup className="CardFormatting">

            <Badge bg="" style={{ backgroundColor: '#b76e79', marginRight: '2rem', marginLeft: '2rem', marginTop: '1rem', marginBottom: '1rem', paddingRight: '3rem', paddingLeft: '3rem', paddingTop: '1rem', paddingBottom: '1rem', fontSize: 20 }}>Business Registration</Badge>

            <Badge bg="" style={{ backgroundColor: '#6cb7ab', marginRight: '2rem', marginLeft: '2rem', marginTop: '1rem', marginBottom: '1rem', paddingRight: '3rem', paddingLeft: '3rem', paddingTop: '1rem', paddingBottom: '1rem', fontSize: 20 }}>Industrial</Badge>
            
            <Badge bg="" style={{ backgroundColor: '#6cb7ab', marginRight: '2rem', marginLeft: '2rem', marginTop: '1rem', marginBottom: '1rem', paddingRight: '3rem', paddingLeft: '3rem', paddingTop: '1rem', paddingBottom: '1rem', fontSize: 20 }}>Bookkeeping</Badge>

            <Badge bg="" style={{ backgroundColor: '#1a9ae3', marginRight: '2rem', marginLeft: '2rem', marginTop: '1rem', marginBottom: '1rem', paddingRight: '3rem', paddingLeft: '3rem', paddingTop: '1rem', paddingBottom: '1rem', fontSize: 20 }}>Business Tax</Badge>

            <Badge bg="" style={{ backgroundColor: '#915c83', marginRight: '2rem', marginLeft: '2rem', marginTop: '1rem', marginBottom: '1rem', paddingRight: '3rem', paddingLeft: '3rem', paddingTop: '1rem', paddingBottom: '1rem', fontSize: 20 }}>Visa Application</Badge>

          </CardGroup>
          <CardGroup className="CardFormatting">

            <Badge bg="" style={{ backgroundColor: '#b76e79', marginRight: '2rem', marginLeft: '2rem', marginTop: '1rem', marginBottom: '1rem', paddingRight: '3rem', paddingLeft: '3rem', paddingTop: '1rem', paddingBottom: '1rem', fontSize: 20 }}>Passport Application</Badge>

            <Badge bg="" style={{ backgroundColor: '#6cb7ab', marginRight: '2rem', marginLeft: '2rem', marginTop: '1rem', marginBottom: '1rem', paddingRight: '3rem', paddingLeft: '3rem', paddingTop: '1rem', paddingBottom: '1rem', fontSize: 20 }}>Mortgage</Badge>

            <Badge bg="" style={{ backgroundColor: '#1a9ae3', marginRight: '2rem', marginLeft: '2rem', marginTop: '1rem', marginBottom: '1rem', paddingRight: '3rem', paddingLeft: '3rem', paddingTop: '1rem', paddingBottom: '1rem', fontSize: 20 }}>Payroll Services</Badge>

            <Badge bg="" style={{ backgroundColor: '#915c83', marginRight: '2rem', marginLeft: '2rem', marginTop: '1rem', marginBottom: '1rem', paddingRight: '3rem', paddingLeft: '3rem', paddingTop: '1rem', paddingBottom: '1rem', fontSize: 20 }}>Fixed/Variable LOC</Badge>

          </CardGroup>
        </div>

        <br />
        <div id='reviews'>
          <CardGroup className="CardFormatting">
            <Card.Header style={{ marginTop: '0.5rem', marginBottom: '1rem' }}><h2>What our customers think?</h2></Card.Header>
          </CardGroup>

          <CardGroup className="CardFormatting">
            
            <Card style={{ padding: '1rem', backgroundColor: '#556d7c', color: 'white', marginRight: '2rem', marginLeft: '2rem', marginTop: '1rem', marginBottom: '1rem'}}>
            <Card.Text>
                <Badge bg="" style={{ backgroundColor: '#b76e79', float: 'right' }} pill>
                  {getStars(5)}
                </Badge>
              </Card.Text>
              <Card.Text>
              Patel’s service is unmatched. He was extremely patient with me and he took the time to make sure that
              I get the most money that I can get back. Would recommend him to anyone who’s new to filing for tax return!!
              </Card.Text>
              <Card.Text style={{ fontSize: '12px' }}>- Moamen Elhendawi</Card.Text>
              
            </Card>

            <Card style={{ padding: '1rem', backgroundColor: '#556d7c', color: 'white', marginRight: '2rem', marginLeft: '2rem', marginTop: '1rem', marginBottom: '1rem'}}>
            <Card.Text>
                <Badge bg="" style={{ backgroundColor: '#b76e79', float: 'right' }} pill>
                  {getStars(5)}
                </Badge>
              </Card.Text>
              <Card.Text>
              Musa has been extremely helpful, responsive, diligent, and honest
               during the whole process of finding an condo apartment. Me and my wife are very thankful for his service.
              </Card.Text>
              <Card.Text style={{ fontSize: '12px' }}>- Anthony Racine</Card.Text>
              
            </Card>

            <Card style={{ padding: '1rem', backgroundColor: '#556d7c', color: 'white', marginRight: '2rem', marginLeft: '2rem', marginTop: '1rem', marginBottom: '1rem'}}>
            <Card.Text>
                <Badge bg="" style={{ backgroundColor: '#b76e79', float: 'right' }} pill>
                  {getStars(5)}
                </Badge>
              </Card.Text>
              <Card.Text>
              Had a great experience with Patel, he took the time to make sure all my tax return were accounted for
                      and all my files were up to date. Highly recommend him for a great service and professional work.
              </Card.Text>
              <Card.Text style={{ fontSize: '12px' }}>- Clovis Obedi</Card.Text>
              
            </Card>
          </CardGroup>

          <CardGroup className="CardFormatting">
            
            <Card style={{ padding: '1rem', backgroundColor: '#556d7c', color: 'white', marginRight: '2rem', marginLeft: '2rem', marginTop: '1rem', marginBottom: '1rem'}}>
            <Card.Text>
                <Badge bg="" style={{ backgroundColor: '#b76e79', float: 'right' }} pill>
                  {getStars(5)}
                </Badge>
              </Card.Text>
              <Card.Text>
              Working with Moses Patel on my tax return was a great experience! He was knowledgeable,
                      thorough, and made sure everything was done correctly. I highly recommend his tax services.
              </Card.Text>
              <Card.Text style={{ fontSize: '12px' }}>- Kristel Caressa Diaz</Card.Text>
              
            </Card>

            <Card style={{ padding: '1rem', backgroundColor: '#556d7c', color: 'white', marginRight: '2rem', marginLeft: '2rem', marginTop: '1rem', marginBottom: '1rem'}}>
            <Card.Text>
                <Badge bg="" style={{ backgroundColor: '#b76e79', float: 'right' }} pill>
                  {getStars(5)}
                </Badge>
              </Card.Text>
              <Card.Text>
              Mr. Musa is very professional, detail orientated and quick at work. More than 100% recommend for services.
              </Card.Text>
              <Card.Text style={{ fontSize: '12px' }}>- Jay Patel</Card.Text>
              
            </Card>

            <Card style={{ padding: '1rem', backgroundColor: '#556d7c', color: 'white', marginRight: '2rem', marginLeft: '2rem', marginTop: '1rem', marginBottom: '1rem'}}>
            <Card.Text>
                <Badge bg="" style={{ backgroundColor: '#b76e79', float: 'right' }} pill>
                  {getStars(5)}
                </Badge>
              </Card.Text>
              <Card.Text>
              Mr Musa Patel is an outstanding real estate agent. In our busy schedule, he managed almost everything, so that nothing
                      unexpected comes out of the blue at the last moment. We closed our deal less than the listed price and all credit goes
                      to him, who negotiated very carefully and submitted the offer.
              </Card.Text>
              <Card.Text style={{ fontSize: '12px' }}>- Firoz Mahmud</Card.Text>
              
            </Card>
          </CardGroup>


        </div>


        <div id='contact'>
          <Card className="CardFormattingContact" >
            <Card.Header><h2>Let's connect!</h2></Card.Header>
            <Card.Body>
              <div className="contact" style={{ color: 'white', fontSize: '18px' }}>
                <Button variant="" style={{ backgroundColor: '#b76e79', color: 'white', fontSize: '18px' }} className='contactButtons' onClick={() => window.location = 'mailto:patel.accounting@gmail.com'}>
                  Send an Email</Button>
              </div>
              <br />
              <p className="contact" style={{ marginRight: '1.0rem', marginLeft: '1.0rem', color: 'white', fontSize: '13px' }}>
                Or reach out to us through - </p>
              <h6 className="contact" style={{ marginRight: '1.0rem', marginLeft: '1.0rem', color: 'white' }}>
                Tel No : +1 (647) 717-9611</h6>
              <h6 className="contact" style={{ marginRight: '1.0rem', marginLeft: '1.0rem', color: 'white' }}>
                Email : patel.accounting@gmail.com</h6>

            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
export default App;