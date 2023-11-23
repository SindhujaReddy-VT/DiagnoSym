import React, { useState , useEffect} from 'react'
import '../css/userDetails.css'
import Header from '../components/header';
import Footer from '../components/footer';
import Profile from '../images/profile_pic.webp'

const UserDetails = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    gender: "Other",
    email: "",
    dob: "",
  });

  const user = window.localStorage.getItem("username")

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/user/details/${user}/`)
      .then((response) => response.json())
      .then((data) => {
        setFormData(data);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, [user]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedData = {
      username: formData.username,
      first_name: formData.firstName,
      last_name: formData.lastName,
      date_of_birth: formData.dob,
      email: formData.email,
      gender: formData.gender,
    };
  
    fetch(`http://127.0.0.1:8000/user/update/${user}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'User details updated successfully') {
          window.alert('User details updated successfully');
        }
      })
      .catch((error) => {
        console.error('Error updating user details:', error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const [currentProfilePic, setCurrentProfilePic] = useState(Profile); 

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Selected File:", selectedFile);
      setCurrentProfilePic(Profile);
    }
  };

  return (
    <div>
      <Header />
    
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
          <div className="form-group 1">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className={`form-control ${formData.username === '' ? 'disabled-input' : ''}`}
              id="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              disabled={true}
            />
          </div>
          <div className="form-row-profile">
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
            <div className="form-group 1 col-md-6">
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
          <div className="form-group 1">
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
          <div className="form-group 1">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              className={`form-control ${formData.email === '' ? 'disabled-input' : ''}`}
              id="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleInputChange}
              disabled={true}
            />
          </div>
          <div className="form-group 1">
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
    <Footer />
    </div>
    
  );
}

export default UserDetails