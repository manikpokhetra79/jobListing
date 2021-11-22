import React from 'react';

const JobRow = (props) => {
  console.log(props);
  const { job } = props;
  return (
    <div className="list-row" key={job._id}>
      <div className="list-logo">
        <img src={job.companyLogo} alt="company-logo" />
      </div>
      <div className="lr-elem">
        <p>{job.position}</p>
        <p className="sub-text">{job.companyName}</p>
      </div>
      <div className="lr-elem">
        <p>{job.location}</p>
        <p className="sub-text">Location</p>
      </div>
      <div className="lr-elem">
        <p>{`${job.experienceRange.min}-${job.experienceRange.max}`}</p>
        <p className="sub-text">Experience</p>
      </div>
      <div className="lr-elem">
        <p>
          {job.requiredSkills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </p>
        <p className="sub-text">Skills</p>
      </div>
      <div className="">
        <button>Apply</button>
      </div>
    </div>
  );
};

export default JobRow;
