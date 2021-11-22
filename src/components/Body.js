import React, { useState, useEffect } from 'react';
import JobRow from './JobRow';

const Body = (props) => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    setJobs(props.jobs);
  }, [props]);
  // console.log(jobs);return (

  return (
    <div className="list-box">
      {jobs.map((job, index) => (
        <JobRow job={job} />
      ))}
    </div>
  );
};

export default Body;
