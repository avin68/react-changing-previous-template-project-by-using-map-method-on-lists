import "./Blog.css";
import BlogItem from "./BlogItem";
import blogPic1 from "../../assets/images/post-1.jpg";
import blogPic2 from "../../assets/images/post-2.jpg";
import blogPic3 from "../../assets/images/post-3.jpg";

function Blog() {
  let blogs = [
    {
      blogeId : 0,
      blogImage: blogPic1,
      blogTitle: "post title 1",
      blogDesc:
        "(1)Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
      blogAuthor: "Avin Esmaeili",
      blogTime: "5",
    },
    {
      blogeId : 1,
      blogImage: blogPic2,
      blogTitle: "post title 2",
      blogDesc:
        "(2)Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
      blogAuthor: "Kazem salib",
      blogTime: "3",
    },
    {
      blogeId : 2,
      blogImage: blogPic3,
      blogTitle: "post title 3",
      blogDesc:
        "(1)Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
      blogAuthor: "Reza Bahrami",
      blogTime: "7",
    },
  ];
  return (
    <section id="blog">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">BLOG</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
          {/* <BlogItem {...blogs[0]} />
              <BlogItem {...blogs[1]} />
              <BlogItem {...blogs[2]} /> */}

          {blogs.map((blog) => (
            <BlogItem key={blog.blogeId} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Blog;
