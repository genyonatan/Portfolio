function About() {
  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <h1>
            Hi, It's <span>Yonatan</span>
          </h1>
          <h3 className="text-animation">
            I'm a <span></span>
          </h3>
          <p>
            A passionate full-stack developer with experience in building
            efficient and user-friendly software solutions. My expertise spans
            back-end development using Spring Boot, front-end interfaces with
            React, and database design.
          </p>
          <div className="social-icons">
            <a href="">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://github.com/genyonatan">
              <i className="bx bxl-github"></i>
            </a>
            <a href="">
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href="">
              <i className="bx bxl-telegram"></i>
            </a>
          </div>

          <div className="btn-group">
            <a href="#" className="btn">
              Hire
            </a>
            <a href="/contact" className="btn">
              Contact
            </a>
          </div>
        </div>

        <div className="home-img">
          <img src="assets/my pic@3x.png" alt="" />
        </div>
      </section>
    </>
  );
}

export default About;
