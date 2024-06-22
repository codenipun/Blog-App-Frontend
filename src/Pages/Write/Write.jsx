import React, { useState, useContext } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Checkbox, Select, Upload, message } from "antd";
import { CloudUploadOutlined, UploadOutlined } from "@ant-design/icons";
import "./write.scss";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import Loader from "../../Components/Loader/Loader";
import { AuthContext } from "../../context/authContext";

const Write = () => {
  const navigate = useNavigate();
  const state = useLocation().state;
  const [desc, setDesc] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");
  const [loading, setLoading] = useState(false);

  const { currentUser } = useContext(AuthContext);

  // console.log(desc, title, file, cat);
  const upload = async () => {
    // Use this sample image or upload your own via the Media Explorer
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(`${process.env.REACT_APP_HOSTED_SERVER}/upload`, formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    // setLoading(true)
    let imgUrl;
    if (file) {
      imgUrl = await upload();
    }
    if (title === "") {
      message.warning("Please enter title");
    }else if(desc === ""){
      message.warning("Please enter Description");
    } else if(cat === ""){
      message.warning("Please Select Category");
    } else if(file === null){
      message.warning("Please Select Image");
    } else {
      setLoading(true)
      try {
        state
          ? await axios.post(`${process.env.REACT_APP_HOSTED_SERVER}/posts/${state.postId}`, {
              title,
              desc: desc,
              cat,
              img: file ? imgUrl : "",
              user_id : currentUser?.id
            })
          : await axios.post(`${process.env.REACT_APP_HOSTED_SERVER}/posts`, {
              title,
              desc: desc,
              img: imgUrl,
              date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
              cat,
              user_id : currentUser?.id
            });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
  };
  const handleVisibility = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    loading? <Loader length={'50vh'}/> :<div className="write">
      <div className="content">
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
          <ReactQuill
            className="editor"
            theme="snow"
            value={desc}
            // formats={['lineBreak']}
            onChange={setDesc}
            placeholder="Write your thoughts..."
          />
      </div>
      <div className="menu">
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <Checkbox
              checked={cat === "ART"}
              name="cat"
              value="ART"
              id="art"
              onChange={(e) => setCat(e.target.value)}
            >
              Art
            </Checkbox>
          </div>
          <div className="cat">
            <Checkbox
              checked={cat === "DESIGN"}
              name="cat"
              value="DESIGN"
              id="design"
              onChange={(e) => setCat(e.target.value)}
            >
              Design
            </Checkbox>
          </div>
          <div className="cat">
            <Checkbox
              name="cat"
              checked={cat === "TECHNOLOGY"}
              value="TECHNOLOGY"
              id="technology"
              onChange={(e) => setCat(e.target.value)}
            >
              Technology
            </Checkbox>
          </div>
          <div className="cat">
            <Checkbox
              checked={cat === "SCIENCE"}
              name="cat"
              value="SCIENCE"
              id="science"
              onChange={(e) => setCat(e.target.value)}
            >
              Science
            </Checkbox>
          </div>
          <div className="cat">
            <Checkbox
              colorPrimary="#b9e7e7"
              checked={cat === "CINEMA"}
              name="cat"
              value="CINEMA"
              id="cinema"
              onChange={(e) => setCat(e.target.value)}
            >
              Cinema
            </Checkbox>
          </div>
          <div className="cat">
            <Checkbox
              checked={cat === "FOOD"}
              name="cat"
              value="FOOD"
              id="food"
              onChange={(e) => setCat(e.target.value)}
            >
              Food
            </Checkbox>
          </div>
        </div>
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Visibility: </b>
            <Select
              defaultValue="public"
              style={{ width: 120 }}
              onChange={handleVisibility}
              options={[
                { value: "public", label: "Public" },
                { value: "private", label: "Private" },
              ]}
            />
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            name=""
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="upload" htmlFor="file">
            <CloudUploadOutlined /> Upload Image
          </label>
          {file?.name}
          <div className="buttons">
            <Button>Save as Draft</Button>
            <Button type="primary" onClick={handleSubmit}>
              <UploadOutlined />
              Publish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
