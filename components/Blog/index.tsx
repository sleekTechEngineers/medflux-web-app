import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28 mb-24"
    >
      <div className="container">
        
<div data-aos="fade-top"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className="text-center max-w-[665px] mx-auto my-24">
  <h1 className="text-3xl md:text-4xl font-bold dark:text-white text-black mb-4">
  Latest in Pharmacy and Technology
  </h1>
  <p className="text-lg text-black dark:text-white">
  Explore how cutting-edge technologies like geolocation and data systems are transforming pharmacy access and patient care.
  </p>
</div>
        <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
