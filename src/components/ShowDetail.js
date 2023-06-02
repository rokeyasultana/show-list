import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader/Loader';
import './ShowDetail.css';

const ShowDetail = () => {

  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [formData, setFormData] = useState({
     Name: '',
    Details: '',
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
      fetch(`https://api.tvmaze.com/shows/${id}`)
          .then((response) => response.json())
          .then((data) => setShow(data))
          .catch((error) => (error));
  }, [id]);

  useEffect(() => {
      const storedFormData = JSON.parse(localStorage.getItem('formData'));
      if (storedFormData) {
          setFormData(storedFormData);
      }
  }, []);

  const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
      }));
  };

  // bookings
  const handleBookings = () => {
      const { name: movieName, summary: movieDetails } = show;
      setFormData({
          movieName,
          movieDetails,
      });
      setShowModal(true);
  };

  // close modal 
  const handleCloseModal = () => {
      setShowModal(false);
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      localStorage.setItem('formData', JSON.stringify(formData));
      handleCloseModal(); 
  };

  if (!show) {
      return <Loader/>
      
  }

  return (
    <div>
 
    <div className='card mx-auto p-3' >
      <div>
      <h4> Movie: {show.name}</h4>
      <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
        <button className="button-box seven"
        
            onClick={handleBookings}>
            Book Ticket
        </button>
      </div>
    </div>
    {showModal && (
 <div>
 <div className="p-6  rounded shadow">
  
<div className='card mx-auto' data-aos="zoom-in-up" data-aos-duration="1500" >
<h2 className="text-xl font-semibold text-center mt-4">Book Ticket</h2>
<form onSubmit={handleSubmit} className="mt-4 bg-body-tertiary p-3">
         <div className="mb-4">
             <label htmlFor="movieName" className="block font-medium mb-1 p-3">
                 Movie: 
             </label>
             <input
                 type="text"
                 id="movieName"
                 name="movieName"
                 defaultValue={formData.movieName}
                 onChange={handleInputChange}
                 className="w-full border border-gray-500 rounded  p-2"
                 disabled
             />
         </div>
         <div className="mb-4">
             <label htmlFor="movieLanguage" className="block font-medium mb-1 p-3">
                 Country: 
             </label>
             <input
                 type="text"
                 id="movieLanguage"
                 name="movieLanguage"
                 defaultValue={formData.movieLanguage}
                 onChange={handleInputChange}
                 className="w-full border  border-gray-300 rounded px-3 py-2"
             required
             />
         </div>
         <div className="mb-4">
             <label htmlFor="movieCategory" className="block font-medium mb-1 p-3">
                Category: 
             </label>
             <input
                 type="text"
                 id="movieCategory"
                 name="movieCategory"
                 defaultValue={formData.movieCategory}
                 onChange={handleInputChange}
                 className="w-full border border-gray-300 rounded px-3 py-2"
            required
            />
         </div>
         <button
             type="submit"
             className="button-box seven "
         >
             Submit
         </button>
     </form>
</div>
 </div>
</div>
)}
</div>
  );
};

export default ShowDetail;