import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  // console.log(props);
  // console.log(YoutubeData);
  return (
    <div className="youtube-list">
      {props.children}
      {YoutubeData.map((item, index) => {
        {
          /* const newClass = index === 1 ? "item-2" : `youtube-item${index + 1}`; */
        }
        return (
          <YoutubeItem
            key={item.id}
            imageSrc={item.imageSrc}
            avatar={item.avatar || item.imageSrc}
            title={item.title}
            author={item.author}
            className={index === 1 ? "item-2" : `youtube-item${index + 1}`}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
