import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AlbumListPage = () => {
  const location = useLocation();
  const userId = new URLSearchParams(location.search).get('userId');
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    if (userId) {
      fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        .then(response => response.json())
        .then(data => setAlbums(data))
        .catch(error => console.log(error));
    }
  }, [userId]);

  return (
    <div>
      <h2>Альбом</h2>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            {album.title}
            <Link to={`/photos?albumId=${album.id}`}>
              <button>Фото</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumListPage;