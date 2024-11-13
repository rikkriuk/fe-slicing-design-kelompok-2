import React from "react";
import BlogTopComponent from "../components/BlogTop/BlogTopComponent";
import BlogBottomComponent from "../components/BlogBottom/BlogBottomComponent";
import TitlePageComponent from "../components/TitlePage/TitlePageComponent";
import AboutComponent from "../components/About/AboutComponent";

const BlogsContainer = () => {
  return (
    <div>
      <AboutComponent title="Blogs" subtitle="Home / Blogs" />
      <TitlePageComponent title={"Our Blog"} description={"Latest Post"} />
      <BlogTopComponent />
      <BlogBottomComponent />
      <BlogBottomComponent />
      <BlogBottomComponent />
    </div>
  );
};

export default BlogsContainer;
