import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"

const FullpageWrapper = fullpageProps => {
  return (<ReactFullpage {...fullpageProps} navigation licenseKey={"YOUR_KEY_HERE"} scrollingSpeed={700}
    //sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
    scrollHorizontallyKey={"YOUR KEY HERE"} render={({ state, fullpageApi }) => {
      console.log("render prop change", state);
      if (state.callback === "onLeave") {
        if (state.direction === "down") {
          console.log("going down..." + state.origin.index);
        }
      }
      return (<div id="fullpage-wrapper">
        <div className="section title-section work__section-title">
          <h1 className="lg-heading work__title">
            My
            <span className="text-secondary">Work</span>
          </h1>
          <h2 className="sm-heading">Check out some of my projects...</h2>
          <button onClick={() => fullpageApi.moveSectionDown()}>
            Move down
          </button>
        </div>
        <div className="section">
          <h3>Section 2</h3>
        </div>
        <div className="section">
          <h3>Section 3</h3>
        </div>
        <div className="section">
          <h3>Section 3</h3>
        </div>
        <div className="section">
          <h3>Section 3</h3>
        </div>
      </div>);
    } } />);
}

export default FullpageWrapper
