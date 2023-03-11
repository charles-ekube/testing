import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const SPOTIFY_API_URL = 'https://api.spotify.com/v1';

export const fetchPlaylists = createAsyncThunk(
    'spotify/fetchPlaylists',
    async (_, { getState }) => {
        const { accessToken } = getState().spotify;
        const headers = {
            Authorization: `Bearer ${accessToken}`,
        };
        const response = await axios.get(`${SPOTIFY_API_URL}/me/playlists`, {
            headers,
        });
        return response.data;
    }
);

const spotifySlice = createSlice({
    name: 'spotify',
    initialState: {
        accessToken: null,
        playlists: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        setAccessToken(state, action) {
            state.accessToken = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlaylists.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchPlaylists.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.playlists = action.payload.items;
            })
            .addCase(fetchPlaylists.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setAccessToken } = spotifySlice.actions;
export default spotifySlice.reducer;
