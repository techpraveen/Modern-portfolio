// import React, { useEffect, useState } from 'react';
// import SpotifyWebApi from 'spotify-web-api-js';
// import '../assets/styles.css';

// // Initialize Spotify API
// const spotifyApi = new SpotifyWebApi();

// const SpotifyLikedSongs = () => {
//   const [tracks, setTracks] = useState([]);

//   useEffect(() => {
//     const storedToken = localStorage.getItem('spotify_access_token');
//     const tokenExpiry = localStorage.getItem('spotify_token_expiry');

//     if (storedToken && tokenExpiry && Date.now() < tokenExpiry) {
//       // Set the access token
//       spotifyApi.setAccessToken(storedToken);

//       // Fetch liked songs
//       spotifyApi.getMySavedTracks()
//         .then(response => {
//           setTracks(response.items);
//         })
//         .catch(error => console.error('Error fetching liked songs:', error));
//     } else {
//       // Redirect to Spotify login page if token is missing or expired
//       const clientId = '37c45348321f46c2ad122fc6c6881fe8';
//       const redirectUri = 'http://localhost:5173/callback';
//       const scopes = ['user-library-read'];
//       const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}`;
//       window.location.href = authUrl;
//     }
//   }, []);

//   return (
//     <div className="spotify-liked-songs">
//        <h1>My Liked Songs on Spotify</h1>
//       <div className="tracks-container">
//         {tracks.map((track) => (
//           <div key={track.track.id} className="track-card">
//             <img
//               src={track.track.album.images[0].url} // Use the first image in the album art array
//               alt={track.track.name}
//               className="track-poster"
//             />
//             <div className="track-details">
//               <h3>{track.track.name}</h3>
//               <p>{track.track.artists.map(artist => artist.name).join(', ')}</p>
//               <p>{track.track.album.name}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SpotifyLikedSongs;