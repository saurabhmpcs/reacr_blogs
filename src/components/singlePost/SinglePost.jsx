import React from "react";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://cdn.pixabay.com/photo/2023/06/16/11/47/books-8067850_640.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Safak</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
          architecto tenetur repellat incidunt, exercitationem blanditiis, at
          corrupti possimus nemo facere fuga animi pariatur quis magnam facilis
          recusandae asperiores laudantium! Pariatur quaerat quibusdam iure
          perferendis doloribus, maiores velit eaque architecto ad, consectetur
          neque! At, dolorum ullam Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reiciendis aspernatur quaerat doloribus ea quae
          facere accusantium ipsa quisquam nihil recusandae, earum ullam
          similique consectetur suscipit animi obcaecati tempora voluptas
          aperiam dolore nemo eum! Praesentium, voluptas omnis saepe quae
          laudantium similique earum iste expedita nulla! Consequatur. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Eos quis delectus
          quo alias esse est, quae repellat non nam totam? Labore quae inventore
          ratione quisquam suscipit dolore similique beatae a velit earum
          necessitatibus animi voluptatibus maxime hic, provident voluptatem eum
          in neque quidem, recusandae veritatis?
        </p>
      </div>
    </div>
  );
}
