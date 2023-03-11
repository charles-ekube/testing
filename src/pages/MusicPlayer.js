import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaylists } from '../redux/spotifySlice';
import { fetchRandomTracks } from '../redux/tracksReducer';
import { selectTracks } from '../redux/tracksSlice';
import LoginButton from './TodoApp/Login';
import ReactPlayer from 'react-player'
import ReactSpotifyWebPlayback from 'react-spotify-web-playback';

const MusicPlayer = () => {

    const { accessToken, playlists } = useSelector(state => state.spotify)
    console.log(accessToken, 'access')
    const dispatch = useDispatch()
    const { isLoading, data, error } = useSelector(state => state.tracks);
    const [url, setUrl] = useState('')
    const [uri, setUri] = useState('')

    console.log(data)
    console.log(playlists)





    useEffect(() => {
        if (playlists) {
            setUrl(playlists[0]?.tracks?.href)
            console.log(url)
        }
        if (data?.items?.length !== 0) {
            setUri(data?.items[0]?.track?.uri)
        }
    }, [])



    // const trackUrl = : '';

    function handleClick() {
        dispatch(fetchRandomTracks({ accessToken, url }));
    }
    function handlePlaylist() {
        dispatch(fetchPlaylists());
    }



    return (
        <>
            <section>
                <LoginButton />
                {accessToken && <button onClick={handleClick}>Get Song</button>}
                {accessToken && <button onClick={handlePlaylist}>Get Playlist</button>}
                {accessToken && <ReactSpotifyWebPlayback token={accessToken} uris={uri} />}
            </section>
        </>
    )
}

export default MusicPlayer;



