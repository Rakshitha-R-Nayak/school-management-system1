import React, {useState}from  'react';
import  {  Form,  Button,  Container,  Row,  Col  }  from  'react-bootstrap';
import  {  useNavigate    }  from  'react-router-dom';
import LoginButton from './loginbutton'
import {Routes, Route } from 'react-router-dom';
import {Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const  Login  =  ()  =>  {
    const  [email,  setEmail]  =  useState('');
    const  [password,  setPassword]  =  useState('');
    const  history  =  useNavigate();

    const  handleSubmit  =  (e)  =>  {
        e.preventDefault();
        //  Implement  login  logic  here
        history.push('/');
    };

    return  (
        <Container>
            <Row  className="justify-content-md-center">
                <Col  md="6">
                    <h2>Login</h2>
                    <Form  onSubmit={handleSubmit}>
                        <Form.Group  controlId="formEmail">
                            <Form.Label>Email  address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter  email"
                                value={email}
                                onChange={(e)  =>  setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group  controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e)  =>  setPassword(e.target.value)}
                            />
                        </Form.Group>
                       <Button >login</Button>
              
             
                        
                        
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export  default  Login;
