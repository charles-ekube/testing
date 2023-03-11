import { createSlice } from '@reduxjs/toolkit';

const tracksSlice = createSlice({
    name: 'tracks',
    initialState: {
        isLoading: false,
        data: [],
        error: null,
    },
    reducers: {
        fetchTracksStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        fetchTracksSuccess(state, action) {
            state.isLoading = false;
            state.data = action.payload;
        },
        fetchTracksFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchTracksStart, fetchTracksSuccess, fetchTracksFailure } =
    tracksSlice.actions;

export const selectTracks = (state) => state.tracks;

export default tracksSlice.reducer;
