import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { FaHome, FaClipboardList, FaChartBar, FaClipboard, FaExchangeAlt, FaProjectDiagram, FaCog, FaQuestionCircle, FaComments, FaTicketAlt } from 'react-icons/fa';


function Sidebar() {
    return (
        <Nav className="flex-column sidebar-nav">
            {/* <div className="sidebar-space"></div> */}
            <div className='nav-link-group'>
                <NavLink to="/" className="nav-link" activeClassName="active">
                    <div className="nav-item">
                        <FaHome className="me-2" /> <span>Dashboard</span>
                    </div>
                </NavLink>
                <NavLink to="/assets" className="nav-link" activeClassName="active">
                    <div className="nav-item">
                        <FaClipboardList className="me-2" /> <span>Assets</span>
                    </div>
                </NavLink>
                <NavLink to="/analysis" className="nav-link" activeClassName="active">
                    <div className="nav-item">
                        <FaChartBar className="me-2" /> <span>Analysis</span>
                    </div>
                </NavLink>
                <NavLink to="/jobs" className="nav-link" activeClassName="active">
                    <div className="nav-item">
                        <FaClipboard className="me-2" /> <span>Jobs</span>
                    </div>
                </NavLink>
                <NavLink to="/reports" className="nav-link" activeClassName="active">
                    <div className="nav-item">
                        <FaClipboardList className="me-2" /> <span>Reports</span>
                    </div>
                </NavLink>
                <NavLink to="/transfers" className="nav-link" activeClassName="active">
                    <div className="nav-item">
                        <FaExchangeAlt className="me-2" /> <span>Transfers</span>
                    </div>
                </NavLink>
                <div className="sidebar-divider"></div>
            </div>


            <div className='nav-link-group'>
                <NavLink to="/projects" className="nav-link" activeClassName="active">
                    <div className="nav-item">
                        <FaProjectDiagram className="me-2" /> <span>Projects</span>
                    </div>
                </NavLink>
                <NavLink to="/settings" className="nav-link" activeClassName="active">
                    <div className="nav-item">
                        <FaCog className="me-2" /> <span>Settings</span>
                    </div>
                </NavLink>
                <NavLink to="/support" className="nav-link" activeClassName="active">
                    <div className="nav-item">
                        <FaQuestionCircle className="me-2" /> <span>Support</span>
                    </div>
                </NavLink>
                <NavLink to="/feedback" className="nav-link" activeClassName="active">
                    <div className="nav-item">
                        <FaComments className="me-2" /> <span>Feedback</span>
                    </div>
                </NavLink>
                <NavLink to="/raise-ticket" className="nav-link" activeClassName="active">
                    <div className="nav-item">
                        <FaTicketAlt className="me-2" /> <span>Raise Ticket</span>
                    </div>
                </NavLink>
            </div>
        </Nav>
    );
}

export default Sidebar;
