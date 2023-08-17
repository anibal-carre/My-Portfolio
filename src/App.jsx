import Contact from "./components/Contact";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Sidenav from "./components/Sidenav";
import Courses from "./components/Courses";
import Tech from "./components/Tech";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Courses />
      <Tech />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
