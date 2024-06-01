import React, { useContext, useState } from "react";
import "./navbar.scss";
import Logo from "../../img/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import editSCG from "../../img/edit.svg";
import { LoginOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, message} from "antd";

const Navbar = () => {
  const { logout, currentUser } = useContext(AuthContext);
  const location = useLocation();
  const searchCat = location.search;
  const [currentCat, setCurrentCat] = useState(
    searchCat ? searchCat.substring(5) : null
  );
  const navigate = useNavigate();

  // console.log(currentUser)
  const handleLogout = async () => {
    try {
      await logout();
      // await axios.post("/auth/login", inputs);
      navigate("/");
      message.success("Logged out successfully")
    } catch (error) {
      console.log(error);
    }
  };

  const handleMenuClick = (e) => {
    if(e.key==='2'){
      handleLogout();
    }
  };
  const items = [
    {
      label: currentUser?.username,
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "Logout",
      key: "2",
      icon: <LogoutOutlined />,
      // onClick : handleLogout,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div className="nav-bar">
      <div className="container">
        <Link className="logo" to="/" onClick={() => setCurrentCat(null)}>
          <img src={Logo} alt=""></img>
        </Link>
        <div className="links">
          <Link
            className="link"
            to="/?cat=art"
            onClick={() => setCurrentCat("art")}
          >
            <h6 className={currentCat === "art" ? "active" : null}>ART</h6>
          </Link>
          <Link
            className="link"
            to="/?cat=science"
            onClick={() => setCurrentCat("science")}
          >
            <h6 className={currentCat === "science" ? "active" : null}>
              SCIENCE
            </h6>
          </Link>
          <Link
            className="link"
            to="/?cat=technology"
            onClick={() => setCurrentCat("technology")}
          >
            <h6 className={currentCat === "technology" ? "active" : null}>
              TECHNOLOGY
            </h6>
          </Link>
          <Link
            className="link"
            to="/?cat=cinema"
            onClick={() => setCurrentCat("cinema")}
          >
            <h6 className={currentCat === "cinema" ? "active" : null}>
              CINEMA
            </h6>
          </Link>
          <Link
            className="link"
            to="/?cat=design"
            onClick={() => setCurrentCat("design")}
          >
            <h6 className={currentCat === "design" ? "active" : null}>
              DESIGN
            </h6>
          </Link>
          <Link
            className="link"
            to="/?cat=food"
            onClick={() => setCurrentCat("food")}
          >
            <h6 className={currentCat === "food" ? "active" : null}>FOOD</h6>
          </Link>
          {currentUser && <Dropdown
            placement="bottomRight"
            arrow={{
              pointAtCenter: true,
            }}
            menu={menuProps}
          >
            <Button style={{display:'flex', justifyContent:'center', alignItems
            :'center'}}>
              <UserOutlined />
            </Button>
          </Dropdown>}
        </div>
      </div>
      <div className="loginCumWriteContainer">
        <button className="loginCumWriteBtn">
          {currentUser ? (
            <div className="writeContainer">
              <img alt="" src={editSCG} className="writeLogo" />
              <Link to={"/write"} className="link">
                Write Post
              </Link>
            </div>
          ) : (
            <Link className="link" to="/login">
              <LoginOutlined/>  Sign In / Register
            </Link>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
