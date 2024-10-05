import { blogbanner } from "../../assets"

const BlogHero = () => {
  return (
    <div className=" relative lg:mt-0 lg:mb-[5rem]">
        <img
            className="lg:px-10 w-full h-auto "
            src={blogbanner}
        />
        <h1 className=" absolute inset-0 flex justify-center items-center h1 font-bold text-green-200 text-9xl underline drop-shadow-xl ">
            Blogs
        </h1>
      
    </div>
  )
}

export default BlogHero;
