import React, { useState } from "react";
import "./FileUpload.css";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const FileUpload = () => {
  const [activeTab, setActiveTab] = useState("newUpload");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="Fileupload-container">
      <div className="fileupload-top-container">
        <div className="fileupload-top-centered">
          <div
            className={`navchild ${activeTab === "newUpload" ? "active" : ""}`}
            onClick={() => handleTabClick("newUpload")}
          >
            <h3>New Upload</h3>
          </div>
          <div
            className={`navchild ${activeTab === "recent" ? "active" : ""}`}
            onClick={() => handleTabClick("recent")}
          >
            <h3>Recent</h3>
          </div>
        </div>
        <div className="fileupload-top-right-corner">
          <div className="icon-container">
            <HiOutlineAdjustmentsHorizontal className="icon" />
          </div>
        </div>
      </div>
      <div className="fileupload-bottom-container">
        <div className="drag-drop-container">
          <p className="drag-drop-text">
            Click to browse or drag and drop your files
          </p>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
