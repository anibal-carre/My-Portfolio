import { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";

import { db } from "../../db/db";

const Projects = ({ languageTexts, currentLanguage }) => {
  const [filter, setFilter] = useState("last");

  const handleFirst = () => {
    setFilter("first");
  };

  const handleLast = () => {
    setFilter("last");
  };

  useEffect(() => {
    console.log(filter);
  }, [filter]);
  return (
    <div
      id="projects"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 2xl:max-w-[1500px]"
    >
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        {languageTexts[currentLanguage].projects}
      </h1>
      <p className="text-center py-8">
        {languageTexts[currentLanguage].projectContent}
      </p>

      <div className="w-full h-[60px] flex justify-center sm:justify-end items-center flex-wrap gap-3 px-5">
        <button
          onClick={handleFirst}
          className="w-[120px] h-[40px] rounded-md text-white bg-[#001b5e] hover:bg-blue-900 text-[12px] font-semibold"
        >
          {languageTexts[currentLanguage].filter.first}
        </button>
        <button
          onClick={handleLast}
          className="w-[120px] h-[40px] rounded-md text-white bg-[#001b5e] hover:bg-blue-900 text-[12px] font-semibold"
        >
          {languageTexts[currentLanguage].filter.last}
        </button>
      </div>

      <div
        id="scroll"
        className="p-2 grid sm:grid-cols-2 gap-12 2xl:grid-cols-3 overflow-y-scroll h-[550px]"
      >
        {filter == "last"
          ? [...db].reverse().map((e) => {
              return (
                <ProjectItem
                  key={e.id}
                  tech={e.tech}
                  img={e.img}
                  title={e.title}
                  demo={e.demo}
                  repository={e.repository}
                  languageTexts={languageTexts}
                  currentLanguage={currentLanguage}
                />
              );
            })
          : db.map((e) => {
              return (
                <ProjectItem
                  key={e.id}
                  tech={e.tech}
                  img={e.img}
                  title={e.title}
                  demo={e.demo}
                  repository={e.repository}
                  languageTexts={languageTexts}
                  currentLanguage={currentLanguage}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Projects;
