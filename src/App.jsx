import Contact from "./components/Contact";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Sidenav from "./components/Sidenav";
import Courses from "./components/Courses";
import Tech from "./components/Tech";
import { languageTexts } from "../languageTexts";
import { useState, useEffect } from "react";

function App() {
  const storedLanguage = localStorage.getItem("selectedLanguage") || "en";
  const [currentLanguage, setCurrentLanguage] = useState(storedLanguage);

  const handleChangeLanguage = (newLanguage) => {
    setCurrentLanguage(newLanguage);
    localStorage.setItem("selectedLanguage", newLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);
  return (
    <div>
      <Sidenav
        currentLanguage={currentLanguage}
        languageTexts={languageTexts}
      />
      <Main
        currentLanguage={currentLanguage}
        languageTexts={languageTexts}
        handleChangeLanguage={handleChangeLanguage}
      />
      <Courses
        languageTexts={languageTexts}
        currentLanguage={currentLanguage}
      />
      <Tech currentLanguage={currentLanguage} languageTexts={languageTexts} />
      <Projects
        currentLanguage={currentLanguage}
        languageTexts={languageTexts}
      />
      <Contact
        currentLanguage={currentLanguage}
        languageTexts={languageTexts}
      />
    </div>
  );
}

export default App;
