import React from "react";
import BlogBottomComponent from "../components/BlogBottom/BlogBottomComponent";
import TitlePageComponent from "../components/TitlePage/TitlePageComponent";
import AboutComponent from "../components/About/AboutComponent";
import MetaComponent from "../components/Meta/MetaComponent";

const BlogsContainer = () => {
  return (
    <div>
      <MetaComponent page={"blog"}/>
      <AboutComponent title="Blogs" subtitle="Home / Blogs" />
      <TitlePageComponent title={"Our Blog"} description={"Latest Post"} />
      <BlogBottomComponent />
    </div>
  );
};

export default BlogsContainer;
