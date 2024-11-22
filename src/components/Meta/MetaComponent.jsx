import React from "react";
import { Helmet } from "react-helmet";
import Logo from "../../../public/logo.svg";

const MetaComponent = ({ page }) => {
  const pages = {
    home: {
      title: "Home - Welcome to Our Website",
      description: "Discover our services, portfolio, and more on our homepage.",
      keywords: "home, welcome, website, services, portfolio"
    },
    about: {
      title: "About Us - Learn More About Our Company",
      description: "Get to know more about our mission, values, and the team behind our success.",
      keywords: "about, company, mission, values, team, history"
    },
    ourServices: {
      title: "Our Services - What We Offer",
      description: "Explore our wide range of services tailored to meet your business needs.",
      keywords: "services, solutions, business, offerings, support"
    },
    portfolio: {
      title: "Portfolio - Our Work",
      description: "Take a look at our portfolio showcasing successful projects and achievements.",
      keywords: "portfolio, projects, work, showcase, achievements"
    },
    blog: {
      title: "Blog - Insights and Updates",
      description: "Read our latest blog posts on various topics, tips, and industry insights.",
      keywords: "blog, articles, insights, updates, industry news"
    },
    contact: {
      title: "Contact Us - Get In Touch",
      description: "Reach out to us for more information, questions, or to discuss your needs.",
      keywords: "contact, get in touch, inquiries, questions, reach out"
    }
  };

  const { title, description, keywords } = pages[page];
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description
  };

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" type="image/svg+xml" href={Logo} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  );
};

export default MetaComponent;
