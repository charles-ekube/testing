import { useEffect, useState } from "react";
import ProjectCard from "./components/landingPage/ProjectCard";
import LandingPage from "./pages/LandingPage";
import MusicPlayer from "./pages/MusicPlayer";
import NotePad from "./pages/notePad/NotePad";
import { Test } from "./pages/Test";
import LoginButton from "./pages/TodoApp/Login";
import Todo from "./pages/TodoApp/Todo";


function App() {

  const [token, setToken] = useState('')

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
    <>
      {!token ? <LoginButton /> : <Test />}
    </>
  );
}

export default App;
