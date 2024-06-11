import { useLocation } from 'react-router-dom'
import Hero from "./Hero/Hero";
import "./Main.css";

const Main = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const showProjects = searchParams.get('showProjects') === 'true';

  return (
    <main>
      <Hero showProjects={showProjects}/>
    </main>
  );
};

export default Main;