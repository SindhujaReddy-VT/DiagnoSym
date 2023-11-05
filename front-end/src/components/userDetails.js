import React, { useState } from 'react'
import '../css/userDetails.css'

const UserDetails = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    gender: "Male",
    email: "",
    dob: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };
  const [selectedFile, setSelectedFile] = useState(null);

  const [currentProfilePic, setCurrentProfilePic] = useState("profile.jpg"); // Replace with the actual URL of the user's current profile picture

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Selected File:", selectedFile);
      setCurrentProfilePic("profile.jpg");
    }
  };

  return (
    <div className="parent">
      <div className="part1">
        <h4 className="header1">Profile Picture</h4>

        <div className="row">
          <img
            src={process.env.PUBLIC_URL + currentProfilePic}
            alt="Profile"
            className="profilepic"
          />
        </div>
        <div className="row">
          <form>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
                onChange={handleFileChange}
                accept="image/*"
                style={{ display: "none" }}
              />
              <label
                className="custom-file-label file-upload"
                htmlFor="customFile"
              >
                Choose file
              </label>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleUpload}
            >
              Upload
            </button>
          </form>
        </div>
      </div>

      <div className="container">
        <h4 className="header2">Account Details</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="Firstname"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Lastname"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select
              className="form-control"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              className="form-control"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserDetails
