import { AiOutlineGithub, AiOutlinePlayCircle } from "react-icons/ai";

const ProjectItem = ({
  img,
  title,
  tech,
  repository,
  demo,
  languageTexts,
  currentLanguage,
  theme,
}) => {
  return (
    <div
      className={`relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl group ${
        theme == "dark"
          ? "shadow-zinc-900 hover:bg-gradient-to-r from-gray-200 to-zinc-950"
          : "shadow-gray-400 hover:bg-gradient-to-r from-gray-200 to-[#001b5e]"
      } `}
    >
      <img
        src={img}
        alt={title}
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-3xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <div className="flex justify-center gap-1 mb-5 mt-8">
          {tech.map((e, i) => {
            return <img className="w-[40px] h-[40px]" src={e} key={i} />;
          })}
        </div>
        <div className="flex justify-center gap-2">
          {demo == null ? (
            ""
          ) : (
            <a target="_blank" href={demo}>
              <p className="flex items-center gap-1 text-center p-2 rounded-lg bg-white text-gray-700 hover:bg-zinc-800 hover:text-white transition-all font-bold cursor-pointer text-md">
                {languageTexts[currentLanguage].demo}
                <AiOutlinePlayCircle />
              </p>
            </a>
          )}
          <a target="_blank" href={repository}>
            <p className="flex items-center gap-1 text-center p-2 rounded-lg bg-white text-gray-700 hover:bg-zinc-800 hover:text-white transition-all font-bold cursor-pointer text-md">
              {languageTexts[currentLanguage].repository}{" "}
              <AiOutlineGithub className="text-[20px]" />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
