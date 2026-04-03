/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
import DeleteButton from "./DeleteBlogs";
import { makeStyles } from "@mui/styles";
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
  blogContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  blogImage: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  editButton: {
    background: "#f0f0f0",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    fontSize: "14px",
  },
  deleteButton: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "red",
    cursor: "pointer",
  },
}));

const UserBlogs = () => {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const id = localStorage.getItem("userId");

  const sendRequest = async () => {
    try {
      const res = await axios.get(`${config.BASE_URL}/api/blogs/user/${id}`);
      const data = res?.data;
      return data;
    } catch (err) {
      console.error("Error fetching user blogs:", err);
      return null;
    }
  };

  useEffect(() => {
    sendRequest().then((data) => {
      setUser(data?.data?.user || null);
      setLoading(false);
    });
  }, []);

  const handleDelete = () => {
    sendRequest().then((data) => {
      setUser(data?.data?.user || null);
    });
  };

  if (loading) {
    return <div></div>
    // return <div className={classes.container}>Loading your blogs...</div>;
  }

  return (
    <div className={classes.container}>
      {user?.blogs && user.blogs.length > 0 ? user.blogs.map((blog) => {
        return (
          <div key={blog._id} className={classes.blogContainer}>
            <Blog
              id={blog._id}
              isUser={true}
              title={blog.title}
              desc={blog.desc}
              img={blog.img}
              user={user.name}
            />
            {/* <DeleteButton blogId={blog._id} onDelete={handleDelete} /> */}
          </div>
        );
      }) : <EmptyBlog description="You haven't created any blogs yet. Start sharing your thoughts!" />}
    </div>
  );
};

export default UserBlogs;
