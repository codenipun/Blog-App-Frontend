import React, { useContext, useEffect, useState } from "react";
import "./single.scss";
import Edit from "../../img/edit.png";
import Delete from "../../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../../Components/Menu/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../../context/authContext";
import ReactQuill from "react-quill";
import { Popconfirm } from "antd";

const Single = () => {
  const [post, setPost] = useState([]);

  const location = useLocation();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

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

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const confirm = (e) => {
    handleDelete();
  };


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
              <Link to={"/write?edit=2"} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <Popconfirm
                title="Delete the Post"
                description="Are you sure to delete this Post?"
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
              >
                <img src={Delete} alt="" />
              </Popconfirm>
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <ReactQuill value={post.desc} readOnly={true} theme="bubble" />
      </div>
      <div className="menu">
        <Menu cat={post?.cat} currPostId={Number(postId)} />
      </div>
    </div>
  );
};

export default Single;
