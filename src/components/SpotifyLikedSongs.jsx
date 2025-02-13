import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import '../assets/styles.css';

const spotifyApi = new SpotifyWebApi();

const SpotifyLikedSongs = () => {
  const [tracks, setTracks] = useState([]);
  const [player, setPlayer] = useState(null);
  const [deviceId, setDeviceId] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('spotify_access_token');
    const tokenExpiry = localStorage.getItem('spotify_token_expiry');

    if (storedToken && tokenExpiry && Date.now() < tokenExpiry) {
      // Set the access token
      spotifyApi.setAccessToken(storedToken);

      // Fetch liked songs
      spotifyApi.getMySavedTracks()
        .then(response => setTracks(response.items))
        .catch(error => console.error('Error fetching liked songs:', error));

      // Initialize Spotify Web Playback SDK
      initializePlayer(storedToken);
    } else {
      // Redirect to Spotify login page if token is missing or expired
      const clientId = '37c45348321f46c2ad122fc6c6881fe8';
      const redirectUri = 'https://modern-portfolio2.onrender.com//callback';
      const scopes = ['user-library-read', 'user-read-playback-state', 'user-modify-playback-state'];
      const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}`;
      window.location.href = authUrl;
    }
  }, []);

  const initializePlayer = (token) => {
    // Define the onSpotifyWebPlaybackSDKReady function
    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'My Spotify App',
        getOAuthToken: cb => { cb(token); },
        volume: 0.5,
      });

      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        setDeviceId(device_id);
      });

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      player.addListener('initialization_error', ({ message }) => {
        console.error('Initialization Error:', message);
      });

      player.addListener('authentication_error', ({ message }) => {
        console.error('Authentication Error:', message);
      });

      player.addListener('account_error', ({ message }) => {
        console.error('Account Error:', message);
      });

      player.connect();
      setPlayer(player);
    };

    // Load the Spotify Web Playback SDK script
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;
    document.body.appendChild(script);
  };

  const playSong = (trackUri) => {
    if (deviceId) {
      spotifyApi.play({
        device_id: deviceId,
        uris: [trackUri],
      })
        .then(() => console.log('Playing:', trackUri))
        .catch(error => console.error('Error playing song:', error));
    } else {
      console.error('No device ID found');
    }
  };

  return (
    <div className="spotify-liked-songs">
      <h1>My Liked Songs on Spotify</h1>
      <div className="tracks-container">
        {tracks.map((track) => (
          <div key={track.track.id} className="track-card" onClick={() => playSong(track.track.uri)}>
            <img
              src={track.track.album.images[0].url} // Use the first image in the album art array
              alt={track.track.name}
              className="track-poster"
            />
            <div className="track-details">
              <h3>{track.track.name}</h3>
              <p>{track.track.artists.map(artist => artist.name).join(', ')}</p>
              <p>{track.track.album.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpotifyLikedSongs;
