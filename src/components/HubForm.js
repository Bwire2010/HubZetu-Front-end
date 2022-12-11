import { useState } from "react";
import "../Css/HubForm.css";

const initialState = {
  name: "",
  image: "",
  location: "",
  description: "",
  founder: "",
};

function HubForm({ onAddHub }) {
  const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/hubs", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newHub) => {
        setFormData(initialState);
        onAddHub(newHub);
      });
  }

  return (
    <div className="hubform">
      <h2>New Hub</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Name: </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="image">Image Url: </label>
          <input
            type="text"
            id="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="location"> Location: </label>
          <input
            type="text"
            id="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="description"> Description: </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="founder"> Founder: </label>
          <input
            type="text"
            id="founder"
            value={formData.founder}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HubForm;
