import React from 'react';
import '../App.css';
import { FaCaretDown } from 'react-icons/fa';



const Jobs = ({ title, jobData }) => {
    return (
        <div className="jobs-container dash-card">

            <div className="header">
                <h3 className='title'>{title}</h3>
                <div className="week">This week <FaCaretDown /></div>
            </div>

            <div className="job-cards">
                {jobData.map((job, index) => (
                    <div key={index} className="job-card">
                        <div className="icon">{job.icon}</div>
                        <div className="label">{job.label}</div>
                        <div className="count">{job.count}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Jobs;