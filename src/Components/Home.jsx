function Home() {
  return (
    <div id="home" className="home section">
      <div className="home-content">
        <div className="profile-img"></div>
        <p className="home-name">Hi, I'm Subham Das</p>
        <p className="home-info">CS Student, Web Developer.</p>
        <a
          href="https://drive.google.com/file/d/1B23yWWI4fqvj1ksGrOL2tQ4OxC94N29n/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
          className="resume"
        >
          Resume
        </a>

        <div className="social-icons">
          <a
            href="https://linkedin.com/in/subhamdas461"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="https://www.instagram.com/subba.JH"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://www.facebook.com/subham.das.148553/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.hackerrank.com/JordanHaste"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-hackerrank"></i>
          </a>
          <a
            href="https://github.com/subhamdas461"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Home;
