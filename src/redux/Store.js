import { configureStore } from '@reduxjs/toolkit';
import spotifyReducer, { fetchPlaylists } from './spotifySlice';
import tracksReducers from './tracksSlice';

const store = configureStore({
    reducer: {
        spotify: spotifyReducer,
        tracks: tracksReducers,
    },
});

export default store