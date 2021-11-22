import React, { useState, useEffect } from 'react';
import JobRow from './JobRow';

const Body = (props) => {
  const [jobs, setJobs] = useState([]); //not required
  useEffect(() => {
    setJobs(props.jobs);
    setFilteredJobs(props.jobs);
  }, [props]);
  // local state variables
  const [searchText, setSearchText] = useState('');
  const [allJobs, setAllJobs] = useState(false);
  const [fullTime, setFullTime] = useState(false);
  const [partTime, setPartTime] = useState(false);
  const [freelancer, setFreelancer] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const handleSelectAll = () => {
    // toggle values
    setAllJobs(!allJobs);
  };
  const handleSelectFullTime = () => {
    setFullTime(!fullTime);
  };
  const handleSelectPartTime = () => {
    setPartTime(!partTime);
  };
  const handleSelectFreelancer = () => {
    setFreelancer(!freelancer);
  };
  const handleSearch = () => {
    console.log(allJobs, fullTime, partTime, freelancer);

    let searchValue = searchText.toLowerCase();
    // this array will contain all the rows with search text
    const filteredResult = jobs.filter((job) => {
      return (
        job.position.toLowerCase().includes(searchValue) ||
        job.location.toLowerCase().includes(searchValue) ||
        job.companyName.toLowerCase().includes(searchValue)
      );
    });
    setFilteredJobs(filteredResult);
    if (allJobs || (fullTime && partTime && freelancer)) {
      setFilteredJobs(filteredResult);
    } else if (fullTime && partTime) {
      // filter within filteredresultsarray
      let newResultsArray = filteredResult.filter((job) => {
        return (
          job.jobType.includes('Full Time') || job.jobType.includes('Part Time')
        );
      });
      // assign new result aray to filteredresults
      setFilteredJobs(newResultsArray);
    } else if (partTime && freelancer) {
      let newResultsArray = filteredResult.filter((job) => {
        return (
          job.jobType.includes('Part Time') ||
          job.jobType.includes('Freelancer')
        );
      });
      setFilteredJobs(newResultsArray);
    } else if (freelancer && fullTime) {
      let newResultsArray = filteredResult.filter((job) => {
        return (
          job.jobType.includes('Full Time') ||
          job.jobType.includes('Freelancer')
        );
      });
      setFilteredJobs(newResultsArray);
    } else if (fullTime) {
      let newResultsArray = filteredResult.filter((job) => {
        return job.jobType.includes('Full Time');
      });
      setFilteredJobs(newResultsArray);
    } else if (partTime) {
      let newResultsArray = filteredResult.filter((job) => {
        return job.jobType.includes('Part Time');
      });
      setFilteredJobs(newResultsArray);
    } else if (freelancer) {
      let newResultsArray = filteredResult.filter((job) => {
        return job.jobType.includes('Freelancer');
      });
      setFilteredJobs(newResultsArray);
    }
    setSearchText('');
  };

  return (
    <div className="list-box">
      <div className="search-bar row g-3 d-flex align-items-center">
        <div className="col-md-3">
          <input
            type="email"
            className="form-control"
            placeholder="Search company"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <div className="col-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="allCheck"
              onChange={handleSelectAll}
            />
            <label className="form-check-label" htmlFor="allCheck">
              All
            </label>
          </div>
        </div>
        <div className="col-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="fullTime"
              onChange={handleSelectFullTime}
            />
            <label className="form-check-label" htmlFor="fullTime">
              Full-Time
            </label>
          </div>
        </div>
        <div className="col-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="partTime"
              onChange={handleSelectPartTime}
            />
            <label className="form-check-label" htmlFor="partTime">
              Part-Time
            </label>
          </div>
        </div>
        <div className="col-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="freelancer"
              onChange={handleSelectFreelancer}
            />
            <label className="form-check-label" htmlFor="freelancer">
              Freelancer
            </label>
          </div>
        </div>
        <div className="col-md-1">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      {filteredJobs.map((job, index) => (
        <JobRow job={job} />
      ))}
    </div>
  );
};

export default Body;
