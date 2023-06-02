import React, { useEffect, useState } from 'react';
import Button from './Shared/Button';


const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {shows.map((show) => (
        <div key={show.show.id}>
          <h3>{show.show.name}</h3>
          <p>{show.show.summary}</p>
          <Button text="Show Summary" link={`/shows/${show.show.id}`} />
        </div>
      ))}
    </div>
  );
};

export default ShowList;
