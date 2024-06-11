import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Project from "../Project/Project";

const Hero = () => {

  const [showProjects, setShowProjects] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if(params.get("showProjects") == "true") {
      setShowProjects(true);
    }
  }, [location]
  );

  const handleButtonClick = () => {
    setShowProjects(true);
  };

 return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Emily's Portfolio</h1>
          {!showProjects && (
          <button onClick={handleButtonClick}>Check out my Work</button>
        )}
        </div>
      </section>
      {showProjects && <Project />}
    </>
  );
};
  
  export default Hero;