import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import FortecImg from "../video/fortec.png"
import AppleImg from "../video/apple.png"

const FullpageWrapper = fullpageProps => {
  return (
  <ReactFullpage {...fullpageProps}
  navigation
  autoScrolling = {false}
  responsiveWidth = {1100}
  licenseKey={"YOUR_KEY_HERE"}
  scrollingSpeed={700}
  sectionsColor={["#282c34", "#282c34", "#0798ec"]}
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
        </div>  */}
        <div className="section">
            <div className="project__inner">
            <h2 className="project__name" style={{color: '#ffffff'}}>Fortec</h2>
            <div className="project__content">
              <a href="https://fortec.com.ua" target="_blank">
              <img className="project__media" src={FortecImg}>
                </img></a>
              <div className="project__details" style={{color: '#ffffff', backgroundColor: '#007462'}}>
                <div className="project__details-side project__details-side_left">
                  <p className="project__description">Fortec</p>
                  <a className="project__link" href="https://fortec.com.ua" target="_blank" style={{color: '#ffffff'}}>Visit site</a>
                </div>
                <div className="project__details-side project__details-side_right">
                  <ul className="project__stack">
                  <li>HTML</li>
                  <li>CSS</li>
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
            <h2 className="project__name" style={{color: '#ffffff'}}>Apple</h2>
            <div className="project__content">
              <a href="https://romkravets.github.io/apple/apple.html" target="_blank">
              <img className="project__media" src={AppleImg}>
                </img></a>
              <div className="project__details" style={{color: '#ffffff', backgroundColor: '#212121'}}>
                <div className="project__details-side project__details-side_left">
                  <p className="project__description">Apple</p>
                  <a className="project__link" href="https://romkravets.github.io/apple/apple.html" target="_blank" style={{color: '#ffffff'}}>Visit site</a>
                </div>
                <div className="project__details-side project__details-side_right">
                  <ul className="project__stack">
                    <li>HTML</li>
                    <li>SCSS</li>
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
        {/* <div className="section">
        </div>
        <div className="section">
        </div> */}
      </div>);
    } } />);
}

export default FullpageWrapper
