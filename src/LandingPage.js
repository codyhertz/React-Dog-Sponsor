import axios from 'axios';
import React, { useState, useEffect } from 'react';

const LandingPage = (props) =>
{
  const [dog, setDog] = useState('');

  const getApi = () => {
      return axios.get(`https://dog.ceo/api/breeds/image/random`);
  }

  setInterval(function(){
    getApi().then(response =>
    {
        setDog(response.data.message);
    })
  }, 7000)

  useEffect(() =>
  {
      // props.getApi('todos');
      getApi().then(response =>
      {
          setDog(response.data.message);
      })
      return () => {
          // props.clearState();
          setDog('');
      }
  },[]);

  return(
    <div className="container jumbotron">
      <h1>Welcome to Super Awesome Dog Sponsors Inc!</h1>
      <img style={{paddingLeft: '20%'}} width="800px" height="500px" src={dog}></img>
      <br></br>
      <p>We are a website dedicated to the sponsorship of dogs who are in need of care. Please navigate to our products section to pick dogs to sponsor.</p>
    </div>
  )
}

export default LandingPage;
