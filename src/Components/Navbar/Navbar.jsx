import React, { useContext } from "react";
import "./navbar.scss";
import Logo from "../../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { logout, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      // await axios.post("/auth/login", inputs);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="nav-bar">
      <div className="container">
        <Link className="logo" to="/">
          <img src={Logo} alt=""></img>
        </Link>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <>
              <span className="logout" onClick={handleLogout}>Logout</span>
              <Link to={"/write"} className="write">
                Write
              </Link>
            </>
          ) : (
            <Link className="link" to="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
