import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greeting/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { message, isLoading } = useSelector((store) => store.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);
  return (
    <div>
      <p>Greeting</p>
      {isLoading && <h1>Loading...</h1>}
      {message && <h1>{message}</h1>}
    </div>
  );
};

export default Greeting;
