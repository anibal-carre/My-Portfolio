import { dbTech } from "../../db/dbTech";
const Tech = ({ languageTexts, currentLanguage, theme }) => {
  return (
    <div
      className={` ${
        theme == "dark" ? "bg-zinc-800" : ""
      } w-full m-auto md:pl-20 p-4 py-16 `}
    >
      <div
        className={` max-w-[1040px] m-auto md:pl-20 p-4 py-16 2xl:max-w-[1500px]`}
      >
        <h1
          className={`text-4xl font-bold text-center ${
            theme == "dark" ? "text-zinc-200" : "text-[#001b5e]"
          } `}
        >
          {languageTexts[currentLanguage].tech}
        </h1>

        <p
          className={`text-center py-8 ${
            theme == "dark" ? "text-slate-300" : ""
          }`}
        >
          {languageTexts[currentLanguage].techContent}
        </p>

        <div className="w-full flex justify-center">
          <div className="flex flex-wrap gap-4 pt-6 max-w-[700px] w-full mt-5">
            {dbTech.map((e) => {
              return (
                <img
                  key={e.id}
                  src={e.icon}
                  alt={e.title}
                  width={40}
                  height={40}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
