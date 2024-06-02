import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const Loader = ({ length }) => (
  <div style={{display:'flex',justifyContent:'center', alignItems:'center', height:length, width:'100%'}}>
    <Spin
      indicator={
        <LoadingOutlined
          style={{
            fontSize: 50,
            color: "#7eb9b9",
          }}
          spin
        />
      }
    />
  </div>
);
export default Loader;
