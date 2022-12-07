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

render() {
    return (
      <Container className='w-50'>
        <h2 className="header text-center p-3">Add a New Hub</h2>
        <Form onSubmit={this.handleOnSubmit} className="mx-auto">
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Hub Name</Form.Label>
            <Form.Control type="text" name="name" value={this.state.title} onChange={this.handleOnChange} placeholder="name"  required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="founder">
            <Form.Label>Founder Name</Form.Label>
            <Form.Control type="text" name="founder" value={this.state.author} onChange={this.handleOnChange} placeholder="founder"  required/>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" name="description" value={this.state.description} onChange={this.handleOnChange} style={{height: '100px'}}  required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="image_url">
            <Form.Label>Cover Image URL</Form.Label>
            <Form.Control type="text" name="image_url" value={this.state.image_url} onChange={this.handleOnChange}  required/>
          </Form.Group>
          <div className='d-grid gap-2 col-6 mx-auto'>
            <Button variant='secondary' type='submit' className='m-auto shadow'>Submit</Button>
          </div>
        </Form>
      </Container>
    )
  }
}

export default connect(null, {addHub})(HubCreateForm);
