import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
import config from "../config";
import EmptyBlog from "./EmptyBlog";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px auto",
    width: "80%",
  },
}));

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const classes = useStyles();

  const sendRequest = async () => {
    try {
      const res = await axios.get(`${config.BASE_URL}/api/blogs`);
      const data = res.data?.data;  
      return data;
    } catch (err) {
      console.error("Error fetching blogs:", err);
      return { blogs: [] }; // Return empty array on error
    }
  };

  useEffect(() => {
    sendRequest().then((data) => {
      setBlogs(data?.blogs || []);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className={classes.container}>Loading Your Feed...</div>;
  }

  return (
    <div>
      {blogs?.length > 0 ?
        blogs.map((blog, index) => (
          <Blog
            key={blog._id}
            id={blog._id}
            isUser={localStorage.getItem("userId") === blog.user._id}
            title={blog.title}
            desc={blog.desc}
            img={blog.img}
            user={blog.user.name}
            date={new Date(blog.date).toLocaleDateString()}
          />
        )) : <EmptyBlog description="Your blog feed is looking a little quiet. This is the perfect moment to share your first insight or update with the world." />}
    </div>
  );
};

export default Blogs;
