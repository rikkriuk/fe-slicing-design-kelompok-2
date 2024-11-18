import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getAboutUs = () => api.get("/api/about-us");
const getTeams = () => api.get("/api/team");
const getWhatWeDo = () => api.get("/api/what-we-do");
const getTestimonial = () => api.get("/api/testimonials");
const getArticle = () => api.get("/api/article");
const getArticleBySlug = (slug) => api.get(`/api/article/${slug}`);

export {
  getAboutUs,
  getTeams,
  getWhatWeDo,
  getTestimonial,
  getArticle,
  getArticleBySlug,
};
