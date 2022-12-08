import React, { useState } from "react";
import HubCreateForm from 'react-bootstrap/Container';

const AddHub = () => {
  const [ hubs,sethubs] = useState({

    name:"",
    image:"",
    location:"", 
    website_url:"",
    description:"",
  });

  const handleChange = (e) => {
    HubCreateForm({
      ...HubCreateForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(``, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(HubCreateForm),
    })
      .then((res) => res.json())
      .then((data) => {
        const newData = [...hubs, data];
        sethubs(newData);
        console.log(newData)
      });
    e.target.reset();
  };

  return (
    <div className="container">
      <h2 className="mt-5 text-center"><b>Contribute to the Hub</b></h2>
      <p className="mb-2 text-center">
      If you have an interesting hub that you wish to add, <br></br>
       feel free  to fill in the necessary details in the form.
      </p>
      <div className="row d-flex justify-content-center mt-4 mb-3">
          <div className="col-md-4">
            <form onSubmit={handleSubmit}>
              <h4 className="text-center">Hubs Details Form</h4>
              <div className="mb-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Image</label>
                <input
                  type="text"
                  className="form-control"
                  name="image_url"
                  placeholder="Enter image url"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Location</label>
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  placeholder="Enter the hub location"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Founder</label>
                <input
                  type="text"
                  className="form-control"
                  name="founder"
                  placeholder="Enter hub founder"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Description</label>
                <input
                  type="number"
                  className="form-control"
                  name="rating"
                  placeholder="Enter the book rating"
                  onChange={handleChange}
                />
              </div>
              <div>
                <button type="submit" className="btn btn-info"> 
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
};

export default AddHub(HubCreateForm);