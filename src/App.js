import { Route, Routes } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import NotFound from "./Components/Authentication/NotFound";
import SignUp from "./Components/Authentication/SignUp";
import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Footer";
import Header from "./Components/Shared/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem('accesssToken');
    if (token) {
      setLoggedIn(true)
    }
  }, [])

  return (
    <div>

      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
   
    </div>
  );
}

export default App;
