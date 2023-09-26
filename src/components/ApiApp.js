
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
            firstName: '',
            lastName: '',
            email: '',
          },
          isComponentVisible: false,
        };
      }
    
      componentDidMount() {
        this.fetchUsers();
      }
    
      fetchUsers() {
        axios.get('http://localhost:8080/appUsers')
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
        axios.post('http://localhost:8080/appUsers', newUser)
          .then(() => {
            this.fetchUsers();
            this.setState({
              newUser: {
                id: '',
                firstName: '',
                lastName: '',
                email: '',
              },
            });
          })
          .catch(error => {
            console.error('Error adding user:', error);
          });
      };

      handleDelete = (id) => {
        axios.delete(`http://localhost:8080/appUsers/delete/${id}`)
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
            <button onClick={this.toggleComponent}>
                View User Management app
            </button>
            {isComponentVisible && (
        <div>
            {/* <h5 className="app-title2">Note: This is for use with the javaSmallProj repo, please run locally before exploring</h5> */}
        <table className="user-grid">
            <thead className="app-title2">Please pull and run the javaSmallProj before using</thead>
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
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
              <button onClick={() => this.handleDelete(user.id)}>Delete</button>
            </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="user-input">
        <button onClick={this.generateRandomUUID}>Generate Random UUID</button>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={newUser.firstName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={newUser.lastName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            value={newUser.email}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Add User</button>
        </div>
        </div>
      )}


      </div>
      
        );
      }
}

export default ApiApp;