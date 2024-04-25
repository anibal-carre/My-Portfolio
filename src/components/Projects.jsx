import ProjectItem from "./ProjectItem";

import { db } from "../../db/db";

const Projects = ({ languageTexts, currentLanguage }) => {
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
      <div className="grid sm:grid-cols-2 gap-12 2xl:grid-cols-3">
        {db.map((e) => {
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
