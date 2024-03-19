const Hero = ({ about }) => {
  console.log("//////////", about);
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row">
          <div className="hero-text wow fadeInUp">
            <span>Hi, I'm</span>
            <h1>{about.name}</h1>
            <h3>{about.title}</h3>
            <p>{about.subTitle}</p>
            <div className="hero-btn-container">
              <a href="#contact" className="btn primary-btn">
                Download CV
              </a>
              <a href="#contact" className="btn secondary-btn">
                Contact
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <div className="hero-img">
            <img src={about.avatar.url} alt="dora_img" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
