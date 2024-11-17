import React, { useEffect, useState } from "react";
import "./BlogDetailStyles.css";
import { getArticleBySlug } from "../../utils/api";
import { useParams } from "react-router-dom";

const BlogDetailComponent = () => {
  const [data, setData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    getArticleBySlug(slug)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.error("Failed to fetch article:", err);
      });
  }, [slug]);

  return (
    <div className="container-fluid mt-5">
      <div className="container">
        <div className="text-cstm mb-4">
          <h1 className="fs-2">{data?.title}</h1>
          <p className="fs-6 text-muted">
            By {data?.writer || "Unknown Author"} | {new Date(data?.date).toLocaleDateString()}
          </p>
        </div>

        <div className="blog-content my-4">
          <img
            src={data?.imageUrl}
            alt={data?.title}
            className="w-100 h-auto border blog-detail-img"
          />
        </div>

        <div
          className="blog-description"
          dangerouslySetInnerHTML={{ __html: data?.content }}
        ></div>
      </div>
    </div>
  );
};

export default BlogDetailComponent;
