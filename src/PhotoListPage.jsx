import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PhotoListPage = () => {
  const location = useLocation();
  const albumId = new URLSearchParams(location.search).get('albumId');
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (albumId) {
      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then(response => response.json())
        .then(data => setPhotos(data))
        .catch(error => console.log(error));
    }
  }, [albumId]);

  return (
    <div>
      <h2>Фото</h2>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoListPage;