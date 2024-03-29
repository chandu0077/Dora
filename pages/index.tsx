import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Copyright from "../src/components/Copyright";
import Experience from "../src/components/Experience";
import Feedback from "../src/components/Feedback";
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import BlogPopup from "../src/components/popup/BlogPopup";
import ImageView from "../src/components/popup/ImageView";
import PortfolioPopup from "../src/components/popup/PortfolioPopup";
import VideoPopup from "../src/components/popup/VideoPopup";
import Service from "../src/components/Service";
import Support from "../src/components/Support";
import Works from "../src/components/Works";
import { DoraContext } from "@/src/Context";
import Cursor from "../src/layout/Cursor";
import PreLoader from "../src/layout/PreLoader";
import { dora } from "@/src/utils";
import { Fragment, useContext, useEffect } from "react";
import Timeline from "@/src/components/Timeline";

const Index = () => {
  useEffect(() => {
    dora.imgToSvg();
    dora.customMouse();
    dora.smoothScrolling();
    dora.stickyNav();
    dora.activeSkillProgressBar();
    const a = document.querySelectorAll("a");
    for (let i = 0; i < a.length; i++) {
      const element = a[i];
      if (element.getAttribute("href") === "#") {
        element.addEventListener("click", (e) => e.preventDefault());
      }
    }
  }, []);
  const {
    blog,
    portfolio_modal,
    about,
    services,
    skills,
    feedbacks,
    projects,
    social_handles,
    timeline_data,
  } = useContext(DoraContext);
  return (
    <Fragment>
      {blog && <BlogPopup />}
      {portfolio_modal && <PortfolioPopup />}
      <ImageView />
      <VideoPopup />
      <PreLoader />
      {/* Preloader End */}
      {/* Header start */}
      <Header />
      {/* Header End */}
      {/* Home Section Start */}
      {about && <Hero about={about} />}
      {/* Home Section End */}
      {/* Support Section Start */}
      {about && <Support about={about} />}
      {/* Support Section End */}
      {/* Service Section Start */}
      {services && <Service services={services} />}
      {/* Service Section End */}
      {/* Experience Section Start */}
      {skills && <Experience skills={skills} />}
      {/* Experience Section End */}
      {/* Timeline Section Start */}
      {timeline_data && <Timeline timeline_data={timeline_data} />}
      {/* Timeline Section End */}
      {/* Works Section Start */}
      {projects && <Works projects={projects} />}
      {/* Works Section End */}
      {/* Feedback Section Start */}
      {feedbacks && <Feedback feedbacks={feedbacks} />}
      {/* Feedback Section End */}
      {/* Blog Section Start */}
      {projects && <Blog projects={projects} />}
      {/* Blog Section End */}
      {/* Contact Section Start */}
      {social_handles && <Contact social_handles={social_handles} />}
      {/* Contact Section End */}
      {/* Copyright */}
      <Copyright />
      {/* Cursor */}
      <Cursor />
    </Fragment>
  );
};
export default Index;
