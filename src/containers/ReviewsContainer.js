import React from 'react';
import ReviewCreateForm from '../components/ReviewCreateForm.js';
import Reviews from '../components/Reviews.js';
import {Route, Switch} from 'react-router-dom';



class ReviewsContainer extends React.Component {
    state = {
      showModal: false
    }
  
    toggleModal = () => {
      this.setState({ showModal: !this.state.showModal })
    }
  
    render () {
      return (
        <div>
          <Switch>
            <Route path='/hubs/:id/reviews/new' render={(routeProps) => <ReviewCreateForm {...routeProps} hub={this.props.hub} toggle={this.toggleModal}/> } />
          </Switch>
          <Reviews reviews={this.props.hub[0].attributes.reviews}/>
          <SuccessModal isOpen={this.state.showModal} toggle={this.toggleModal} />
        </div>
      )
    }
  }
  
  export default ReviewsContainer;