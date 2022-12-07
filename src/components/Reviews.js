import React from 'react';
import {connect} from 'react-redux';
import {deleteReview} from '../actions/deleteReview.js';
import {Container, Card, Button} from 'react-bootstrap';

const Reviews = (props) => {

    const handleDelete = (review) => {
      props.deleteReview(review.id, review.book_id);
    }
  