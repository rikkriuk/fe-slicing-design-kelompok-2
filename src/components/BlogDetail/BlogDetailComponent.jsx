import React from "react";
import potoBlog from "../../assets/potoblog3.jpeg";
import "./BlogDetailStyles.css";
import BlogBottomComponenet from "../BlogBottom/BlogBottomComponent";

const BlogDetailComponent = () => {
  return (
    <div className="container">
      <div className="container">
        <div className="text-center text-cstm">
          <h1 className="display-4">Blog Post Title</h1>
          <p className="lead"> By Author Name | January 1, 2023</p>
        </div>
        <div className="blog-content container">
          <img
            src={potoBlog}
            alt=""
            height="700"
            width="1270"
            className="mx-0"
          />
        </div>
        <p className="mx-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,
          necessitatibus perspiciatis quas provident saepe sequi corrupti
          deleniti amet quos sed. Reprehenderit sequi quibusdam quas provident
          beatae quae dolore officiis cupiditate
        </p>
        <p className="mx-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,
          necessitatibus perspiciatis quas provident saepe sequi corrupti
          deleniti amet quos sed. Reprehenderit sequi quibusdam quas provident
          beatae quae dolore officiis cupiditate
        </p>
        <p className="mx-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,
          necessitatibus perspiciatis quas provident saepe sequi corrupti
          deleniti amet quos sed. Reprehenderit sequi quibusdam quas provident
          beatae quae dolore officiis cupiditate
        </p>
      </div>
      <BlogBottomComponenet />
    </div>
  );
};

export default BlogDetailComponent;
