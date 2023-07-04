import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://cdn.pixabay.com/photo/2023/06/16/11/47/books-8067850_640.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </span>
        <hr />
        <span className="postDate">1 hour </span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis suscipit
        exercitationem adipisci ipsam possimus laborum odio expedita libero, ad
        dolore quas, neque dolorum molestias hic facilis recusandae pariatur
        eius itaque consectetur officiis?
      </p>
    </div>
  );
}
