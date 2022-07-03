import React, { useState, useEffect } from 'react';
import './FunctionalLifeCycleHooks.css';
import { fetchPhotos } from './fetchPhotos';

let deBounce;
function FunctionalLifeCycleHooks() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState();
  const [hasError, setErrors] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const { photos } = await fetchPhotos(search);
         setPhotos(photos);
         setLoading(false);
      } catch(error) {
        setErrors(true);
        setLoading(false);
      }
    }

    fetchData();
  }, [search]);

  const updateSearchHandler = ({target: {value}}) => {
    clearInterval(deBounce);
    deBounce = setTimeout(() => {
      setErrors(false);
      setPhotos([]);
      setSearch(value);
    }, 1000);
  };

  return(
    <div>
      <div className='form-group'>
        <h1> Functional Life Cycle Hooks : Pexels Api </h1>

        <hr />

        <input type='text' className='form-control' placeholder='ex., wall papers' onChange={updateSearchHandler} />

        <hr />

        {!hasError && !isLoading && !search && (
          <div className='card'>
            <div className='card-body'>
              <div className='alert alert-info'>
                No search till now!, Start Searching immediatly..
              </div>
            </div>
          </div>
        )}

        {hasError && !isLoading && (
          <div className='card'>
            <div className='card-body'>
              <div className='alert alert-danger'>
                Oops! an error has occured...
              </div>
            </div>
          </div>
        )}

        {isLoading && search && !hasError && (
          <div className='card'>
            <div className='card-body'>
              <div className='alert alert-warning'>
                You are in searching mood...
              </div>
            </div>
          </div>
        )}

        {!hasError && !isLoading && search && photos && photos.length === 0 && (
          <div className='card'>
            <div className='card-body'>
              <div className='alert alert-warning'>
                Oops! Okay., you are searching., but no photos found...
              </div>
            </div>
          </div>
        )}

        {photos && photos.length > 0 && (
          <div className='card'>
            <div className='card-body'>
              <div className='row'>
              {photos.map((photo, index) => {
                return(
                  <div className='alert alert-success col-4'>
                    <img src={photo.src.medium} alt='' title='' className='img-thumbnail' />
                    {/* <video controls style={{width: '190px'}}>
                      <source src={photo.url} />
                    </video> */}
                  </div>
                )
              })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FunctionalLifeCycleHooks;