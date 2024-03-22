const Experience = ({ skills }) => {
  return (
    <section className="experience-section" id="about">
      <div className="container">
        {/* Experience Title */}
        <div className="section_title wow fadeInUp center">
          <p>Why Choose Me</p>
          <h2>My Experience Area</h2>
        </div>
        <div className="experience-items wow fadeInUp">
          {/* 01 experience item start */}
          {skills
            .filter((skill, idx) => idx < 8)
            .map((skill, i) => {
              return (
                <div className="experience-item">
                  <div className="experience-info">
                    <p>{skill.name}</p>
                    <p>{skill.percentage}%</p>
                  </div>
                  <div
                    className="progress-line"
                    data-percent={`${skill.percentage}%`}
                  >
                    <span />
                  </div>
                </div>
              );
            })}
          {/* 01 experience item end */}
        </div>
      </div>
    </section>
  );
};
export default Experience;
