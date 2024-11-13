import React from "react";
import BlogTopComponent from "../components/BlogTop/BlogTopComponent";
import BlogBottomComponenet from "../components/BlogBottom/BlogBottomComponenet";
const BlogsContainer = () => {
  return (
    <div>
      <BlogTopComponent />
      <BlogBottomComponenet />
      <BlogBottomComponenet />
      <BlogBottomComponenet />
    </div>
  );
};

export default BlogsContainer;
