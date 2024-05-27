import React, { useContext, useState } from "react";
import "./navbar.scss";
import Logo from "../../img/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { logout, currentUser } = useContext(AuthContext);
  const location = useLocation();

  const searchCat = location.search
  console.log(searchCat.substring(5));
  const [currentCat, setCurrentCat] = useState(searchCat ? searchCat.substring(5) : null);
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
  console.log(currentCat)
  return (
    <div className="nav-bar">
      <div className="container">
        <Link className="logo" to="/" onClick={()=>setCurrentCat(null)}>
          <img src={Logo} alt=""></img>
        </Link>
        <div className="links">
          <Link className="link" to="/?cat=art" onClick={()=>setCurrentCat("art")}>
            <h6 className={currentCat==='art' ? "active" : null}>ART</h6>
          </Link>
          <Link className="link" to="/?cat=science" onClick={()=>setCurrentCat("science")}>
            <h6 className={currentCat==='science' ? "active" : null}>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=technology" onClick={()=>setCurrentCat("technology")}>
            <h6 className={currentCat==='technology' ? "active" : null}>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=cinema" onClick={()=>setCurrentCat("cinema")}>
            <h6 className={currentCat==='cinema' ? "active" : null}>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=design" onClick={()=>setCurrentCat("design")}>
            <h6 className={currentCat==='design' ? "active" : null}>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=food" onClick={()=>setCurrentCat("food")}>
            <h6 className={currentCat==='food' ? "active" : null}>FOOD</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <>
              <span className="logout" onClick={handleLogout}>
                Logout
              </span>
              <Link to={"/write"} className="write">
                Write
              </Link>
            </>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
