import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTracksStart, fetchTracksSuccess, fetchTracksFailure } from './tracksSlice';

export const fetchRandomTracks = createAsyncThunk(
    'tracks/fetchRandomTracks',
    async ({ accessToken, url }, thunkAPI) => {
        thunkAPI.dispatch(fetchTracksStart());

        try {
            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message);
            }

            const data = await response.json();
            thunkAPI.dispatch(fetchTracksSuccess(data));
        } catch (error) {
            thunkAPI.dispatch(fetchTracksFailure(error.message));
        }
    }
);