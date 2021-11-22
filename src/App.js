import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import { addJobs } from './action/index';
import { data } from './utils/data';
const App = () => {
  const jobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch action to get jobs data from file and store in redux store
    dispatch(addJobs(data));
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Body jobs={jobs} />
      <Footer />
    </div>
  );
};

export default App;
