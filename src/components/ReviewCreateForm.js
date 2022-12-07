import React from 'react';
import { Form, Button} from "react-bootstrap";
import {Container } from "react-bootstrap";
import AddReview from 'react-bootstrap/Container'

class ReviewCreateForm extends React.Component {
  state = {
    name: '',
    content: '',
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addReview(this.state, this.props.hub[0].id, this.props.history);
    this.props.toggle();
  }

  render () {
    return (
      <Container className='w-50 p-5'>
        <h2 className='header text-center'>Create a New Review</h2>
        <Form onSubmit={this.handleOnSubmit} className='mx-auto'>
          <Form.Group className='mb-3' controlId="name">
            <Form.Label>Review Name:</Form.Label>
            <Form.Control type="text" name="name" value={this.state.title} onChange={this.handleOnChange} required/>
          </Form.Group>
          <Form.Group className='mb-3' controlId="content">
            <Form.Label>Content:</Form.Label>
            <Form.Control as='textarea' name="content" value={this.state.content} onChange={this.handleOnChange} style={{height: '100px'}} required/>
          </Form.Group>
          <div className='d-grid gap-2 col-6 mx-auto'>
            <Button variant='secondary' type='submit' className='m-auto shadow' >Submit</Button>
          </div>
        </Form>
      </Container>
    )
  }
}

export default (null, {AddReview})(ReviewCreateForm)