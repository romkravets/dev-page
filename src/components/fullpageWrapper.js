import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import FortecImg from "../images/fortec.png"
import AppleImg from "../images/apple.png"
import CoffeeStoreImg from "../images/coffee-store.png"
import CheshireCatImg from "../images/cheshire-cat.png"

const FullpageWrapper = fullpageProps => {
  return (
    <ReactFullpage {...fullpageProps}
      navigation
      autoScrolling={false}
      responsiveWidth={768}
      scrollBar= {true}
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={700}
      sectionsColor={["#282c34", "#282c34", "#282c34", "#282c34"]}
      scrollHorizontallyKey={"YOUR KEY HERE"} render={({ state, fullpageApi }) => {
        console.log("render prop change", state);
        if (state.callback === "onLeave") {
          if (state.direction === "down") {
            console.log("going down..." + state.origin.index);
          }
        }
        return (
          <div id="fullpage-wrapper">
            {/* <div className="section title-section work__section-title">
           <h1 className="lg-heading work__title">
            My
            <span className="text-secondary">Work</span>
          </h1>
          <h2 className="sm-heading">Check out some of my projects...</h2>
          <button onClick={() => fullpageApi.moveSectionDown()}>
            Move down
          </button>
        </div> */}
            <div className="section">
              <div className="project__inner">
                <h2 className="project__name" style={{ color: '#ffffff' }}>Cheshire Cat</h2>
                <div className="project__content">
                  <a href="https://romkravets.github.io/simple-template/" target="_blank" rel="noopener noreferrer">
                    <img className="project__media" src={CheshireCatImg} alt="portfolio Roman Kravets">
                    </img></a>
                  <div className="project__details" style={{ color: '#ffffff', backgroundColor: '#186E64', pointerEvents: 'none' }}>
                    <div className="project__details-side project__details-side_left">
                      <p className="project__description">Cheshire Cat</p>
                      <a className="project__link" href="https://romkravets.github.io/simple-template/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>Visit site</a>
                    </div>
                    <div className="project__details-side project__details-side_right">
                      <ul className="project__stack">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                        <li>Gulp</li>
                      </ul>
                      <span className="project__year">2019</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="project__inner">
                <h2 className="project__name" style={{ color: '#ffffff' }}>Fortec</h2>
                <div className="project__content">
                  <a href="https://fortec.com.ua" target="_blank" rel="noopener noreferrer">
                    <img className="project__media" src={FortecImg} alt="portfolio Roman Kravets">
                    </img></a>
                  <div className="project__details" style={{ color: '#ffffff', backgroundColor: '#007462', pointerEvents: 'none' }}>
                    <div className="project__details-side project__details-side_left">
                      <p className="project__description">Fortec</p>
                    </div>
                    <div className="project__details-side project__details-side_right">
                      <ul className="project__stack">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                        <li>PHP</li>
                        <li>WordPress</li>
                        <li>Vagrant</li>
                      </ul>
                      <span className="project__year">2018</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="project__inner">
                <h2 className="project__name" style={{ color: '#ffffff' }}>Apple</h2>
                <div className="project__content">
                  <a href="https://romkravets.github.io/apple/apple.html" target="_blank" rel="noopener noreferrer">
                    <img className="project__media" src={AppleImg} alt="portfolio Roman Kravets">
                    </img></a>
                  <div className="project__details" style={{ color: '#ffffff', backgroundColor: '#212121', pointerEvents: 'none' }}>
                    <div className="project__details-side project__details-side_left">
                      <p className="project__description">Apple</p>
                      <a className="project__link" href="https://romkravets.github.io/apple/apple.html" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>Visit site</a>
                    </div>
                    <div className="project__details-side project__details-side_right">
                      <ul className="project__stack">
                        <li>HTML</li>
                        <li>SCSS</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                        <li>BEM</li>
                        <li>Webpack</li>
                      </ul>
                      <span className="project__year">2018</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="project__inner">
                <h2 className="project__name" style={{ color: '#ffffff' }}>Coffee Store</h2>
                <div className="project__content">
                  <a href="https://romkravets.github.io/coffee-store/final_project.html#/" target="_blank" rel="noopener noreferrer">
                    <img className="project__media" src={CoffeeStoreImg} alt="portfolio Roman Kravets">
                    </img></a>
                  <div className="project__details" style={{ color: '#ffffff', backgroundColor: '#C7A17A', pointerEvents: 'none' }}>
                    <div className="project__details-side project__details-side_left">
                      <p className="project__description">CoffeeStore</p>
                      <a className="project__link" href="https://romkravets.github.io/coffee-store/final_project.html#/" target="_blank" rel="noopener noreferrer"  style={{ color: '#ffffff' }}>Visit site</a>
                    </div>
                    <div className="project__details-side project__details-side_right">
                      <ul className="project__stack">
                        <li>React</li>
                        <li>React Router</li>
                        <li>SCSS</li>
                        <li>Flexbox</li>
                        <li>BEM</li>
                        <li>Webpack</li>
                      </ul>
                      <span className="project__year">2018</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>);
      }} />);
}

export default FullpageWrapper
