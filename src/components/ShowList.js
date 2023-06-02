import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ShowList.css';

const ShowList = () => {
  const [movieShows, setMovieShows] = useState([]);

  useEffect(() => {
      fetch('https://api.tvmaze.com/search/shows?q=all')
          .then((response) => response.json())
          .then((data) => setMovieShows(data))},
           []);

  return (
    <div className='movie-container' data-aos="zoom-in-up" data-aos-duration="1500" >
      {
                movieShows?.map(show => {
                    return <div list={show} key={show.id}>
                        <div>


                        <div class="card" >
  <img  src={show.show.image?.medium} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{show.show.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  
  <Link class="btn btn-info" to={`/details/${show.show.id}`} >
          Show details 
        </Link>
 
  </div>
</div>

                        </div>
                    </div>
                })
            }
    </div>
  );
};

export default ShowList;