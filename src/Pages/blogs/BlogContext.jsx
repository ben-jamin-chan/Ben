import { useEffect, useState } from "react";
import BlogsData from "../../BlogsData";

const BlogContext = () => {

  const [blogDetails, setBlogDetails] = useState([]);

  useEffect(() =>{
    BlogsData.blogs()
    .then((result)=>{
      const blogData = result || [];
      setBlogDetails(blogData.reverse());
    })
    .catch((erorr)=>{
      console.error("Error get data")
    });
  },[]);

  return (
    <div className=" containern mt-50 lg:mt-52">
      {blogDetails.map((blog, index) => (
        <div className=" container" key={index}>
          <img src={blog.pic} />
          <h1 className="h1">{blog.title}</h1>
          <p className=" mt-10">{blog.short}</p>

        </div>
      ))}
      
    </div>
  )
}

export default BlogContext
