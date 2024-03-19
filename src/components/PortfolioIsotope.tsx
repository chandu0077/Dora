import Isotope from "isotope-layout";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { DoraContext } from "../Context";
const PortfolioIsotope = ({ projects }) => {
  // Isotope
  const isotope = useRef<Isotope | null>();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".works-row", {
        itemSelector: ".works-col",
        // layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".works-col",
        },
        // animationOptions: {
        //   duration: 750,
        //   easing: "linear",
        //   queue: false,
        // },
      });
    }, 1000);
    // return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    if (isotope.current) {
      // @ts-nocheck
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = useCallback(
    (key: any) => () => {
      setFilterKey(key);
    },
    [],
  );

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  const { portfolio_modal_show } = useContext(DoraContext);

  return (
    <div className="work-isotope-filter">
      {/* work isotope menu */}
      <ul className="works-list-ul wow fadeInUp"></ul>
      {/* work isotope items */}
      <div className="works-row wow fadeInUp">
        {projects.map((project: any, idx: any) => (
          <div key={idx} className="works-col youtube">
            <a
              href="//www.youtube.com/embed/B-ytMSuwbf8?autoplay=1"
              onClick={(e) => {
                e.preventDefault();
                portfolio_modal_show(true);
              }}
            >
              <img src={project.image.url} alt={project.title} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PortfolioIsotope;
