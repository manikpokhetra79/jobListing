import React, { useState } from 'react';

const JobRow = (props) => {
  // console.log(props);
  const { job } = props;
  const [alert, setAlert] = useState(false);
  let handleApply = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };
  return (
    <>
      {alert && (
        <div class="alert alert-success mt-2" role="alert">
          Applied Successfullyto <strong>{job.companyName} </strong>at{' '}
          {job.position} position.
        </div>
      )}
      <div className="list-row" key={job._id}>
        <div className="list-logo lr-elem">
          <img
            src={job.companyLogo}
            alt="company-logo"
            className="company-logo"
          />
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
          <p>{`${job.experienceRange.min}-${job.experienceRange.max} Years`}</p>
          <p className="sub-text">Experience</p>
        </div>
        <div className="lr-elem">
          <div className="skills">
            {job.requiredSkills.map((skill, index) => (
              <p key={index}>{skill}&nbsp;</p>
            ))}
          </div>
          <p className="sub-text">Skills</p>
        </div>
        <div className="">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default JobRow;
