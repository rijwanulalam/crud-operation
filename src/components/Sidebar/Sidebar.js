import React from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar-main flex-column text-center p-5">
            <div className="mt-5 fw-bold"><Link to="/existinguser">Existing User</Link></div>
            <div className="mt-5 fw-bold"><Link to="/createuser">Create User</Link></div>
        </div>
    );
};

export default Sidebar;