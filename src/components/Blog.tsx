import { useContext, useState } from "react";
import { DoraContext } from "../Context";

const Blog = ({ projects }) => {
  const { blogDetails, blogs } = useContext(DoraContext);
  const [toggle, setToggle] = useState(false);
  const toggleHandle = () => {
    setToggle((prevState) => {
      return !prevState;
    });
  };
  return (
    <section className="blog-section fill-section" id="blog">
      <div className="container">
        {/* Blog Titel */}
        <div className="section_title wow fadeInUp center">
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <p>From My Blog</p>
            <button
              onClick={toggleHandle}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "14px",
                fontWeight: "500",
                width: "120px",
                backgroundColor: "#fd6e0a",
                color: "#1f1d2b",
                borderRadius: "13px",
                cursor: "pointer",
                height: "auto",
                gap: "5px",
                padding: "8px 12px",
              }}
            >
              {toggle ? "card view" : "list view"}
              <img
                className="svg"
                src="images/icons/arrow-right.svg"
                alt="dora_img"
                width={"20"}
                height={"20"}
              />
            </button>
          </div>
          <h2>Our Recent Updates, Blog, Tips, Tricks &amp; More</h2>
        </div>
        <div
          className="blog-items"
          style={{
            flexDirection: toggle ? "column" : "row",
          }}
        >
          {projects
            .filter((project: any, idx: any) => idx < 3)
            .map((project: any) => {
              return (
                <div
                  className="blog-item"
                  style={{ width: toggle ? "550px" : "33.3%" }}
                >
                  <div className="wow fadeInUp item__">
                    <a
                      href="//www.youtube.com/embed/B-ytMSuwbf8?autoplay=1"
                      className="blog-item-img"
                      onClick={() => blogDetails()}
                    >
                      <img src={project.image.url} alt="dora_img" />
                    </a>
                    <div
                      className="blog-info"
                      style={{
                        textAlign: toggle ? "center" : "left",
                        marginBottom: toggle ? "40px" : "0px",
                      }}
                    >
                      <a
                        href="//www.youtube.com/embed/B-ytMSuwbf8?autoplay=1"
                        onClick={() => blogDetails()}
                        className="category"
                      >
                        {project.title}
                      </a>

                      <h4>
                        <a
                          href="//www.youtube.com/embed/B-ytMSuwbf8?autoplay=1"
                          onClick={() => blogDetails()}
                        >
                          {project.techStack}
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
export default Blog;
