import { useEffect, useState } from "react";
import BlogsData from "../../BlogsData";

const BlogContext = () => {

///this is for illustration

  const [blogDetails, setBlogDetails] = useState([]);

  useEffect(() => {
    const fetchBlogs = new Promise((resolve, reject) => {
      if (BlogsData.length > 0) {
        resolve(BlogsData);
      } else {
        reject("No blog data available");
      }
    });

    fetchBlogs
      .then((result) => {
        const blogData = result || [];
        setBlogDetails(blogData.reverse());
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className=" containern mt-50 lg:mt-52">
      {blogDetails.map((blog, index) => (
        <div className=" container" key={index}>
          <h1 className="h1">{blog.title}</h1>
          <img src={blog.pic} />
          <p className=" mt-10">{blog.short}</p>

        </div>
      ))}
      
    </div>
  )
}

export default BlogContext
