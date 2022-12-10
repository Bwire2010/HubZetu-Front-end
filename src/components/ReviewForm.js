import { useState } from "react";
import { useParams } from "react-router";

const initialState = {
  comment: "",
};

function ReviewForm({ onAddReview }) {
  const [formData, setFormData] = useState(initialState);
  const { id } = useParams();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/hubs/${id}/review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newReview) => {;
        setFormData(initialState);
        onAddReview(newReview);
      });
  }

  return (
    <div className="card">
      <h2>Add a New Review</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment">Comment: </label>
        <textarea
          id="comment"
          value={formData.comment}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReviewForm;
