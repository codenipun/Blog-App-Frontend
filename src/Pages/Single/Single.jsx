import React, { useContext, useEffect, useState } from "react";
import "./single.scss";
import Edit from "../../img/edit.png";
import Delete from "../../img/delete.png";
import { Link, useLocation } from "react-router-dom";
import Menu from "../../Components/Menu/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../../context/authContext";

const Single = () => {
  const [post, setPost] = useState([]);

  const location = useLocation();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId]);

  return (
    <div className="single">
      <div className="content">
        <img src={post.postImg} alt=""></img>
        <div className="user">
          <img src={post.ownerImg} alt="userImg" />
          <div className="info">
            <span>{post.owner}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.id === post.ownerId && (
            <div className="edit">
              <Link to={"/write?edit=2"}>
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
      </div>
      <div className="menu">
        <Menu cat={post?.cat} currPostId = {postId}/>
      </div>
    </div>
  );
};

export default Single;
