import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import {connect} from 'react-redux';
import {addHub} from '../actions/addHub.js'

class HubCreateForm extends React.Component {
    state = {
        name:"",
        image:"",
        location:"", 
        website_url:"",
        description:"",
    } 
}
handleOnChange = (event) =>{
    this .setState({
        [event.target.name]: event.target.value
    })
}
handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addHub(this.state,this.props.history);
    this.props.toggle(); 
}
