import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAccessToken } from "../../redux/spotifySlice";

function LoginButton() {
    const dispatch = useDispatch();

    // function handleLogin() {
    //     // Authenticate with Spotify and get the access token
    //     const accessToken = 'your_access_token';
    //     dispatch(setAccessToken(accessToken));
    // }


    const CLIENT_ID = "906b8015a2dd40a4b2421778cd8e1de7"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"


    const [token, setToken] = useState("")

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)
        dispatch(setAccessToken(token))

    }, [])


    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }



    return (
        <div className="App">
            <header className="App-header">
                <h1>Spotify React</h1>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}
            </header>
        </div>
    );
}

export default LoginButton