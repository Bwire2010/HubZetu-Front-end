import React from "react";
import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import Reviews from "./Reviews";
import ReviewForm from "./ReviewForm";
import { useSelector } from "react-redux";

function HubDetails(hub, onDeleteHub) {
  const { id } = useParams();
  const [hubs, setHubs] = useState([]);
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const openFormReview = () => {
    setIsReviewFormOpen(!isReviewFormOpen);
  };

  useEffect(() => {
    const getHubs = async () => {
      const response = await fetch(`/hubs/${id}`);
      setHubs(await response.json());
    };
    getHubs();
  });

  function handleDeleteHub() {
    fetch(`/logout/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteHub(hub);
      }
    });
  }

  return (
    <>
      <img src={hubs.image} alt={hubs.name} />
      <h2>{hubs.name}</h2>
      <p>{hubs.location}</p>
      <p>{hubs.description}</p>
      <p> Founder:{hubs.founder}</p>

      <p>
        Link: <em>{hubs.website_url}</em>
      </p>

      <button onClick={() => openFormReview()}>
        {isReviewFormOpen ? "Close Review Form" : "Add Review"}{" "}
      </button>
      <button onClick={handleDeleteHub}> Delete Hub </button>
      {isAuthenticated ? (
        <>{isReviewFormOpen && <ReviewForm />}</>
      ) : (
        <>{ !isAuthenticated && isReviewFormOpen && navigate("/login")}</>
      )}

      <Reviews />
    </>
  );
}

export default HubDetails;
