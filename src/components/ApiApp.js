
import React, { useEffect, useState } from 'react';
import '../css/ApiApp.css';
import axios from 'axios';

class ApiApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          users: [],
          newUser: {
            id: '',
            first_name: '',
            last_name: '',
            email: '',
          },
          isComponentVisible: false,
        };
      }
    
      componentDidMount() {
        this.fetchUsers();
      }
    
      fetchUsers() {
        axios.get('https://python-users-crud-portfolio-be-2902900fe179.herokuapp.com/appUsers')  
          .then(response => {
            this.setState({ users: response.data });
          })
          .catch(error => {
            console.error('Error fetching users:', error);
          });
      }
    
      handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
          newUser: {
            ...prevState.newUser,
            [name]: value,
          },
        }));
      };
    
      handleSubmit = () => {
        const { newUser } = this.state;
        const isEmailValid = this.validateEmail(newUser.email);
      
        if (!isEmailValid) {
          alert('Invalid email address. Please enter a valid email.');
          return;
        }
      
        axios.post('https://python-users-crud-portfolio-be-2902900fe179.herokuapp.com/appUsers', newUser)
          .then(() => {
            this.fetchUsers();
            this.setState({
              newUser: {
                id: '',
                first_name: '',
                last_name: '',
                email: '',
              },
            });
          })
          .catch(error => {
            console.error('Error adding user:', error);
          });
      };

      handleDelete = (id) => {
        axios.delete(`https://python-users-crud-portfolio-be-2902900fe179.herokuapp.com/appUsers/delete/${id}`)
          .then(() => {
            this.fetchUsers(); // Refresh the user list after deleting a user
          })
          .catch(error => {
            console.error('Error deleting user:', error);
          });
      };

      generateRandomUUID = () => {
        const randomUUID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          const r = (Math.random() * 16) | 0;
          const v = c === 'x' ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        });
      
        this.setState(prevState => ({
          newUser: {
            ...prevState.newUser,
            id: randomUUID,
          },
        }));
      };

      validateEmail = (email) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return regex.test(email);
      };

      toggleComponent = () => {
        console.log('Toggle button clicked');
        this.setState(prevState => ({
          isComponentVisible: !prevState.isComponentVisible,
        }));
      };
    
      render() {
        const { newUser, users, isComponentVisible } = this.state;
        return (
            <div className="center-button">
            <button  id='toggleBtn' className='button-70' onClick={this.toggleComponent}>
                View User Management app
            </button>
            {isComponentVisible && (
        <div>
            {/* <h5 className="app-title2">Note: This is for use with the javaSmallProj repo, please run locally before exploring</h5> */}
        <table className="user-grid">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => (
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
              <button id='deleteBtn' onClick={() => this.handleDelete(user.id)}>Delete</button>
            </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
        {/* <button id='genRandomUUIDBtn' className='button-70' onClick={this.generateRandomUUID}>Generate Random UUID</button> */}
          <input
            id='firstNameInput'
            className='button-70'
            type="text"
            name="first_name"
            placeholder="First Name"
            value={newUser.first_name}
            onChange={this.handleChange}
          />
          <input
          id='lastNameInput'
            className='button-70'
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={newUser.last_name}
            onChange={this.handleChange}
          />
          <input
            id='emailInput'
            className='button-70'
            type="text"
            name="email"
            placeholder="Email Address"
            value={newUser.email}
            onChange={this.handleChange}
          />
          <button id='addUserBtn' className='button-70' onClick={this.handleSubmit}>Add User</button>
        </div>
        </div>
      )}


      </div>
      
        );
      }
}

export default ApiApp;