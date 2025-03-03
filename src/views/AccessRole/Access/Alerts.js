import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMinus, FaPlus } from 'react-icons/fa';
import "./access.css"
// import '@fortawesome/fontawesome-free/css/all.min.css';

const RoleManager = () => {
  // Initial state for available roles and added roles
  const [userRoles, setUserRoles] = useState([
    {
      id: "1",
      name: "Super Admin",
      show: true,
      roles: [
        { name: "Open admin page" },
        { name: "See users page" },
        { name: "See groups page" },
      ],
    },
    {
      id: "2",
      name: "Kindred Access",
      show: true,
      roles: [
        { name: "Search for users" },
        { name: "Search for groups" },
        { name: "Search for roles" },
      ],
    },
    {
      id: "3",
      name: "Quater Access",
      show: true,
      roles: [
        { name: "Search for users" },
        { name: "Search for groups" },
        { name: "Search for roles" },
      ],
    },
    {
      id: "4",
      name: "Town Access",
      show: true,
      roles: [
        { name: "Search for users" },
        { name: "Search for groups" },
        { name: "Search for roles" },
      ],
    },
    {
      id: "5",
      name: "Ward Access",
      show: true,
      roles: [
        { name: "Search for users" },
        { name: "Search for groups" },
        { name: "Search for roles" },
      ],
    },
    {
      id: "6",
      name: "L.G.A Access",
      show: true,
      roles: [
        { name: "Search for users" },
        { name: "Search for groups" },
        { name: "Search for roles" },
      ],
    },
    {
      id: "7",
      name: "State Access",
      show: true,
      roles: [
        { name: "Search for users" },
        { name: "Search for groups" },
        { name: "Search for roles" },
      ],
    },
  ]);

  const [addedRoles, setAddedRoles] = useState([
    {
      id: "1",
      name: "Super Admin",
      show: true,
      roles: [{ name: "Validate Users", id: 10 }],
    },
    {
      id: "2",
      name: "Kindred Access",
      show: false,
      roles: [],
    },
    {
      id: "3",
      name: "Quater Access",
      show: false,
      roles: [],
    },
    {
      id: "4",
      name: "Town Access",
      show: false,
      roles: [],
    },
    {
      id: "5",
      name: "Ward Access",
      show: false,
      roles: [],
    },
    {
      id: "6",
      name: "L.G.A Access",
      show: false,
      roles: [],
    },
    {
      id: "7",
      name: "State Access",
      show: false,
      roles: [],
    },
  ]);

  // Toggle the accordion for available roles
  const toggleUserCategory = (index) => {
    setUserRoles(prev => {
      const newUser = [...prev];
      newUser[index] = { ...newUser[index], show: !newUser[index].show };
      return newUser;
    });
  };

  // Toggle the accordion for added roles
  const toggleAddedCategory = (index) => {
    setAddedRoles(prev => {
      const newAdded = [...prev];
      newAdded[index] = { ...newAdded[index], show: !newAdded[index].show };
      return newAdded;
    });
  };

  // Move a role from available roles to added roles
  const addRole = (categoryIndex, roleIndex) => {
    setUserRoles(prevUser => {
      const newUser = [...prevUser];
      const role = newUser[categoryIndex].roles[roleIndex];
      // Remove the role from available roles
      newUser[categoryIndex] = {
        ...newUser[categoryIndex],
        roles: newUser[categoryIndex].roles.filter((_, idx) => idx !== roleIndex),
      };
      // Update addedRoles separately
      setAddedRoles(prevAdded => {
        const newAdded = [...prevAdded];
        newAdded[categoryIndex] = {
          ...newAdded[categoryIndex],
          roles: [...newAdded[categoryIndex].roles, role],
          show: true,
        };
        return newAdded;
      });
      return newUser;
    });
  };

  // Move a role from added roles back to available roles
  const removeRole = (categoryIndex, roleIndex) => {
    setAddedRoles(prevAdded => {
      const newAdded = [...prevAdded];
      const role = newAdded[categoryIndex].roles[roleIndex];
      // Remove the role from added roles
      newAdded[categoryIndex] = {
        ...newAdded[categoryIndex],
        roles: newAdded[categoryIndex].roles.filter((_, idx) => idx !== roleIndex),
      };
      // Update userRoles separately
      setUserRoles(prevUser => {
        const newUser = [...prevUser];
        newUser[categoryIndex] = {
          ...newUser[categoryIndex],
          roles: [...newUser[categoryIndex].roles, role],
          show: true,
        };
        return newUser;
      });
      return newAdded;
    });
  };

  return (
    <div className="container">
      <div className="row" id="add-section">
        {/* Available Roles Column */}
        <div className="col">
          <h4 className="text-center">Available Groups Access</h4>
          <div className="card">
            <div id="accordion">
              {userRoles.map((category, index) => 
                category.roles.length > 0 && (
                  <div className="card" key={category.id}>
                    <div className="card-header">
                      <a
                        href="#"
                        className="card-linkRemoVe"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleUserCategory(index);
                        }}
                      >
                        {category.name}
                      </a>
                    </div>
                    <div
                      id={'collapse_' + index}
                      className={`collapse ${category.show ? 'show' : ''}`}
                      data-parent="#accordion"
                    >
                      <ul className="list-group">
                        {category.roles.map((role, idx) => (
                          <li className="list-group-item" key={idx}>
                            <span>{role.name}</span>
                            <button
                              className="btn btn-sm btn-primary float-right pushPLUs align-middle"
                              onClick={() => addRole(index, idx)}
                            >
                              <i className="fas fa-plus"> <FaPlus /></i>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Added Roles Column */}
        <div className="col">
          <h4 className="text-center">Added Access</h4>
          <div className="card">
            <div id="accordion2">
              {addedRoles.map((category, index) => 
                category.roles.length > 0 && (
                  <div className="card" key={category.id}>
                    <div className="card-header">
                      <a
                        href="#"
                        className="card-linkRemoVe"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleAddedCategory(index);
                        }}
                      >
                        {category.name}
                      </a>
                    </div>
                    <div
                      id={'collapse2_' + index}
                      className={`collapse ${category.show ? 'show' : ''}`}
                      data-parent="#accordion2"
                    >
                      <ul className="list-group">
                        {category.roles.map((role, idx) => (
                          <li className="list-group-item" key={idx}>
                            <span>{role.name}</span>
                            <button
                              className="btn btn-sm btn-danger float-right pushPLUs align-middle"
                              onClick={() => removeRole(index, idx)}
                            >
                              <i className="fas fa-minus"><FaMinus /></i>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              )}
            </div>
         
          </div>
         <div className='pushPLUs'> <button className='btn btn-primary'>Save Changes</button></div>
         
        </div>
      </div>
    </div>
  );
};

export default RoleManager;
