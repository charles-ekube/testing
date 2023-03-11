import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback';

export const Test = () => {
    let token = ''
    const SPOTIFY_API_URL = 'https://api.spotify.com/v1';
    const [playlist, setPlaylist] = useState(null)
    const [tracks, setTracks] = useState(null)
    const [uri, setUri] = useState('')

    useEffect(() => {
        const getToken = localStorage.getItem('token')
        token = getToken
        console.log(token)
    }, [])


    const getPlaylist = () => {
        axios.get(`${SPOTIFY_API_URL}/me/playlists`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((result) => {
            console.log(result)
            setPlaylist(result?.data)
        }).catch((err) => {
            console.log(err)
        });
    }


    const getTracks = (url) => {
        axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((result) => {
            console.log(result, 'TRACKS')
            setTracks(result?.data)
        }).catch((err) => {
            console.log(err, 'TRACKS')
        });
    }


    // <ReactSpotifyWebPlayback token={token} uris={uris} />

    const renderPlayList = () => {
        if (playlist) {
            return playlist?.items?.map((item, index) => {
                return (
                    <div style={{ display: "flex", alignItems: "center", margin: '20px 0' }} onClick={() => getTracks(item?.tracks?.href)}>
                        {item?.images?.map((image) => {
                            return (
                                <img src={image?.url} style={{ width: '100px', height: "100px", marginRight: '20px' }} />
                            )
                        })}
                        <p style={{ marginRight: "20px" }}>{item?.name}</p>
                        <p>{item?.tracks?.total}</p>
                    </div>
                )
            })
        }
    }


    const getUri = (uri) => {
        setUri(uri)
    }

    const renderTracks = () => {
        if (tracks) {
            return tracks?.items?.map((item, index) => {
                return (
                    <li onClick={() => getUri(item?.track?.uri)}>
                        {item?.track?.album?.images?.map((image) => {
                            return (
                                <img src={image?.url} style={{ width: '100px', height: "100px", marginRight: '20px' }} />
                            )
                        })}
                        <p>{item?.track?.name}</p>
                    </li>
                )
            })
        }

    }


    // useEffect(() => {
    //     window.onSpotifyWebPlaybackSDKReady = () => {
    //         const player = new Spotify.Player({
    //             name: 'Web Playback SDK Quick Start Player',
    //             getOAuthToken: cb => { cb(token); }
    //         });
    //     }

    // }, [])

    return (
        <>
            <button onClick={getPlaylist}>Get PlayList</button>
            {renderPlayList()}
            {renderTracks()}
            {uri && <SpotifyPlayer
                token={'BQCIgXEvXJ4CfD_T5w0r19gouON6XcficxfXBfTren0crvxFmc31HKT94WI_71jLrww-FarKr41TSeTDfG6zDemYDjXTjN7RfnV80gacj5ZC5_Cz2W4A09far5dcfNYkLgg8icuKLSygi3lqAO91ZQmp0ZoI1o-ynHBU2yepTN-JLDTEKzwOPWw2ZPhc5x4q9xP_QBj5sxMfJJxNbEa6r8xZO7Aflk0jV90XL7w91FIbZnKClez5aimL2585DFRN8SfgHpuqXVh39bhhahKuF9IpDhkuAkCZoPe4WcjuW3oitJDb0nDcL4rvu0dPjsl4Xnj-DcaU3JJGdA'}
                uris={uri}
            />}
        </>
    )
}
