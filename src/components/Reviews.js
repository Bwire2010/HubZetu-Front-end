import { useState, useEffect } from "react";

function Review({  onDeleteReview }) {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then(setReview);
  }, []);


  const handleDeleteReview = (review) => {
    handleDelete(review.id, review.hub_id);
  }

  

  function handleDelete() {
    fetch(`/logout/${review.id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteReview(review);
      }
    });
  }


  return (

    <div className="spice-item card">
       <h3>Reviews</h3>

       <container>
      <div className="details"></div>
        <p> {review.comment}</p>
        <button onClick={handleDeleteReview}>Delete Review</button>
    
        
        </container>
      
    </div>
  );
}

export default Review;