import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import FortecImg from "../images/fortec.png"
import AppleImg from "../images/apple.png"
import CoffeeStoreImg from "../images/coffee-store.png"
import CheshireCatImg from "../images/cheshire-cat.png"
import HolidayImg from "../images/holiday_1.png"
import CreatorsImg from "../images/creator.png"
import JoinImg from "../images/join_1.png"
import providenceImg from "../images/providence.png"
import brakfastImg from "../images/brakfast.png"

const FullpageWrapper = fullpageProps => {
  return (
    <ReactFullpage {...fullpageProps}
      navigation
      autoScrolling={false}
      responsiveWidth={768}
      scrollBar= {true}
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={700}
      sectionsColor={["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"]}
      scrollHorizontallyKey={"YOUR KEY HERE"} render={({ state, fullpageApi }) => {
        if (state.callback === "onLeave") {
          if (state.direction === "down") {
            // console.log("going down..." + state.origin.index);
          }
        }
        return (
          <div id="fullpage-wrapper">

            <div className="section">
              <div className="project__inner">
                <h2 className="project__name" style={{ color: '#ffffff' }}>Providence</h2>
                <div className="project__content">
                  <a href="https://romkravets.github.io/new-providence-template/" target="_blank" rel="noopener noreferrer">
                    <img className="project__media" src={providenceImg} alt="portfolio Roman Kravets">
                    </img></a>
                  <div className="project__details" style={{ color: '#212228', backgroundColor: '#F0F0F1', pointerEvents: 'none' }}>
                    <div className="project__details-side project__details-side_left">
                      <p className="project__description">Providence</p>
                      <a className="project__link" href="https://romkravets.github.io/new-providence-template/" target="_blank" rel="noopener noreferrer" style={{ color: '#212228' }}>Visit site</a>
                    </div>
                    <div className="project__details-side project__details-side_right">
                      <ul className="project__stack">
                        <li>HTML</li>
                        <li>SCSS</li>
                        <li>Flexbox</li>
                        <li>Vue.js</li>
                        <li>Webpack</li>
                      </ul>
                      <span className="project__year">2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section">
              <div className="project__inner">
                <h2 className="project__name" style={{ color: '#ffffff' }}>Breakfast Restaurant</h2>
                <div className="project__content">
                  <a href="https://romkravets.github.io/breakfast-restaurant-landing-page-template/" target="_blank" rel="noopener noreferrer">
                    <img className="project__media" src={brakfastImg} alt="portfolio Roman Kravets">
                    </img></a>
                  <div className="project__details" style={{ color: '#212228', backgroundColor: '#E5AF57', pointerEvents: 'none' }}>
                    <div className="project__details-side project__details-side_left">
                      <p className="project__description">Breakfast restauran</p>
                      <a className="project__link" href="https://romkravets.github.io/breakfast-restaurant-landing-page-template/" target="_blank" rel="noopener noreferrer" style={{ color: '#212228' }}>Visit site</a>
                    </div>
                    <div className="project__details-side project__details-side_right">
                      <ul className="project__stack">
                        <li>HTML</li>
                        <li>SCSS</li>
                        <li>Flexbox</li>
                        <li>JS</li>
                        <li>Webpack</li>
                      </ul>
                      <span className="project__year">2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
                <h2 className="project__name" style={{ color: '#ffffff' }}>Join</h2>
                <div className="project__content">
                  <a href="https://github.com/romkravets/test" target="_blank" rel="noopener noreferrer">
                    <img className="project__media" src={JoinImg} alt="portfolio Roman Kravets">
                    </img></a>
                  <div className="project__details" style={{ color: '#ffffff', backgroundColor: '#DFC804', pointerEvents: 'none' }}>
                    <div className="project__details-side project__details-side_left">
                      <p className="project__description">Join</p>
                      <a className="project__link" href="https://github.com/romkravets/test" target="_blank" rel="noopener noreferrer"  style={{ color: '#ffffff' }}>Visit site</a>
                    </div>
                    <div className="project__details-side project__details-side_right">
                      <ul className="project__stack">
                        <li>HTML</li>
                        <li>SCSS</li>
                        <li>BEM</li>
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
                      <a className="project__link" href="https://fortec.com.ua" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>Visit site</a>
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
                        <li>SCSS</li>
                        <li>Bootstrap</li>
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

            <div className="section">
              <div className="project__inner">
                <h2 className="project__name" style={{ color: '#ffffff' }}>Holiday</h2>
                <div className="project__content">
                  <a href="https://romkravets.github.io/template-holiday-landing_page/" target="_blank" rel="noopener noreferrer">
                    <img className="project__media" src={HolidayImg} alt="portfolio Roman Kravets">
                     </img></a>
                 <div className="project__details" style={{ color: '#ffffff', backgroundColor: '#CECB4D', pointerEvents: 'none' }}>
                     <div className="project__details-side project__details-side_left">
                       <p className="project__description">Holiday</p>
                       <a className="project__link" href="https://romkravets.github.io/template-holiday-landing_page/" target="_blank" rel="noopener noreferrer"  style={{ color: '#ffffff' }}>Visit site</a>
                     </div>
                     <div className="project__details-side project__details-side_right">
                       <ul className="project__stack">
                        <li>HTML</li>
                        <li>SASS</li>
                        <li>Grid</li>
                        <li>Bootstrap</li>
                        <li>Gulp</li>
                       </ul>
                       <span className="project__year">2017</span>
                     </div>
                     </div>
                </div>
              </div>
            </div>

            <div className="section">
              <div className="project__inner">
                <h2 className="project__name" style={{ color: '#ffffff' }}>Creators</h2>
                <div className="project__content">
                  <a href="https://romkravets.github.io/grid-template/" target="_blank" rel="noopener noreferrer">
                    <img className="project__media" src={CreatorsImg} alt="portfolio Roman Kravets">
                    </img></a>
                  <div className="project__details" style={{ color: '#ffffff', backgroundColor: '#F0650D', pointerEvents: 'none' }}>
                    <div className="project__details-side project__details-side_left">
                      <p className="project__description">Creators</p>
                      <a className="project__link" href="https://romkravets.github.io/grid-template/" target="_blank" rel="noopener noreferrer"  style={{ color: '#ffffff' }}>Visit site</a>
                    </div>
                    <div className="project__details-side project__details-side_right">
                      <ul className="project__stack">
                        <li>HTML</li>
                        <li>SASS</li>
                        <li>BEM</li>
                        <li>Bootstrap</li>
                        <li>Gulp</li>
                      </ul>
                      <span className="project__year">2017</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>);
      }} />);
}

export default FullpageWrapper
