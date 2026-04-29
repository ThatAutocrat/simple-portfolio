import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="profile__container">
            
            {/* Profile Image & Name */}
            <div className="profile__data">
              <div className="profile__border">
                <div className="profile__perfil">
                  <img src="assets/img/fotor-ai-20230601232629.jpg" alt="Devashish" />
                </div>
              </div>
              <h2 className="profile__name">Devashish Gogoi</h2>
              <h3 className="profile__profession">Web Developer</h3>
              
              <ul className="profile__social">
                <a href="https://www.linkedin.com/in/devashish-gogoi-55b6b2223/" target="_blank" rel="noopener noreferrer" className="profile__social-link">
                  <i className="ri-linkedin-box-fill"></i>
                </a>
                <a href="https://github.com/ThatAutocrat" target="_blank" rel="noopener noreferrer" className="profile__social-link">
                  <i className="ri-github-fill"></i>
                </a>
              </ul>
            </div>

            {/* Year & Semester */}
            <div className="profile__info">
              <div className="profile__info-group">
                <h3 className="profile__info-number">3rd</h3>
                <p className="profile__info-description">Year</p>
              </div>
              <div className="profile__info-group">
                <h3 className="profile__info-number">5th</h3>
                <p className="profile__info-description">Semester</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="profile__button">
              <a download href="assets/pdf/21BCE11429_CV_page-0001.jpg" className="button">
                Download CV <i className="ri-download-cloud-2-line"></i>
              </a>
              <div className="profile__buttons-small">
                <a href="https://www.linkedin.com/in/devashish-gogoi-55b6b2223/" target="_blank" rel="noopener noreferrer" className="button button__small">
                  <i className="ri-discuss-fill"></i>
                </a>
                <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="button button__small">
                  <i className="ri-message-2-line"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </header>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Devashish Gogoi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;