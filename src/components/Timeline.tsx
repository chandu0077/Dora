import { time } from "console";

const Timeline = ({ timeline_data }) => {
  const getIcon = (idx) => {
    switch (idx) {
      case 0:
        return "images/icons/projectIcon.svg";
      case 1:
        return "images/icons/cpu.svg";
      case 2:
        return "images/icons/ui-ux.svg";
      case 3:
        return "images/icons/exp.svg";
      default:
      // code block
    }
  };

  return (
    <section>
      <div className="timeline-container-block">
        <div className="section_title wow fadeInUp center">
          <h2 style={{ paddingBottom: 0 }}>Time line</h2>
        </div>
        <div className="timeline-main">
          <div className="timeline-block">
            {timeline_data
              .filter((el, idx: number) => idx < 4)
              .map((timeline: any, idx: number) => {
                return (
                  <div
                    key={idx}
                    className={`timeline-block-item timeline-block-style timeline-block-${idx}`}
                  >
                    <div className="timeline-baloon">
                      <img src={getIcon(idx)} />
                    </div>
                    <p className="timeline-heading">{timeline.company_name}</p>
                    <p className="timeline-title">{timeline.jobTitle}</p>
                    <p className="timeline-location">{timeline.jobLocation}</p>
                    <p className="timeline-summary">
                      {timeline.bulletPoints[0]}
                    </p>
                  </div>
                );
              })}
            <img
              src="images/right.png"
              alt="right-angle"
              className="timeline-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Timeline;
