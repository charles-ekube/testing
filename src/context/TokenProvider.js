import { useEffect, useState } from "react"
import { Token } from "./Context"

function TokenProvider() {
    // Use the token state and setToken function provided by the useState hook
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
        // dispatch(setAccessToken(token))

    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    return (
        // Provide the token value to child components
        <Token.Provider value={{ token, logout }}>
            <div>
                ...
            </div>
        </Token.Provider>
    )
}

export default TokenProvider