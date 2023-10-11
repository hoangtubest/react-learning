import React from "react";

const YoutubeItem = (props) => {
  return (
    <div className={`youtube-item ${props.className}`}>
      <div
        className="youtube-image"
        // style={{ height: "250px" }}
      >
        <img
          src={props.imageSrc}
          alt=""
          // style={{
          //   width: "100%",
          //   height: "100%",
          //   objectFit: "cover",
          //   objectPosition: "center",
          // }}
        />
      </div>

      <div className="youtube-desc">
        <img src={props.avatar} alt="" className="youtube-avatar" />

        <div className="youtube-content">
          <h3 className="youtube-title">
            {props.title || "This is example of title"}
          </h3>
          <p>{props.author || "author example"}</p>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
