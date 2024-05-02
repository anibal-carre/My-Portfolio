import { TypeAnimation } from "react-type-animation";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import mainImg from "../assets/main-img.jpg";
import SelectLanguage from "./SelectLanguage";

const Main = ({
  languageTexts,
  handleChangeLanguage,
  currentLanguage,
  theme,
}) => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={mainImg}
        alt="main-img"
      />
      <div
        className={`w-full h-screen absolute top-0 left-0 ${
          theme == "dark" ? "bg-zinc-700/50" : "bg-white/50"
        } `}
      >
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1
            className={`sm:text-5xl text-4xl font-bold ${
              theme == "dark" ? "text-white/90" : "text-gray-800"
            }`}
          >
            {languageTexts[currentLanguage].myInfo.im} David Carreño
          </h1>
          <h2
            className={`flex sm:text-3xl text-2xl pt-4 ${
              theme == "dark" ? "text-white/90" : "text-gray-800"
            }`}
          >
            {languageTexts[currentLanguage].myInfo.i}
            <TypeAnimation
              sequence={[
                languageTexts[currentLanguage].myInfo.dev,
                2000,
                languageTexts[currentLanguage].myInfo.cod,
                2000,
                languageTexts[currentLanguage].myInfo.ent,
                2000,
                languageTexts[currentLanguage].myInfo.student,
                2000,
              ]}
              wrapper="div"
              cursor={true}
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>

          <div className="flex justify-between pt-6 max-w-[200px] w-full mt-5">
            <a target="_blank" href="https://github.com/anibal-carre">
              <AiFillGithub
                className={`cursor-pointer ${
                  theme == "dark" ? "text-white" : "text-black"
                } hover:text-black`}
                size={25}
              />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/david.carrenoalvarez/"
            >
              <FaFacebookF
                className={`cursor-pointer ${
                  theme == "dark" ? "text-white" : "text-black"
                } hover:text-blue-700`}
                size={25}
              />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/davidcarrenoalvarez/"
            >
              <FaInstagram
                className={`cursor-pointer ${
                  theme == "dark" ? "text-white" : "text-black"
                } hover:text-purple-500`}
                size={25}
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/anibal-david-carre%C3%B1o-alvarez-2066aa267/"
            >
              <FaLinkedinIn
                className={`cursor-pointer ${
                  theme == "dark" ? "text-white" : "text-black"
                } hover:text-blue-400`}
                size={25}
              />
            </a>
          </div>
          <div className="flex flex-col gap-1 md:flex-row md:gap-4">
            <button className="mt-10 bg-[#001b5e] text-white font-semibold p-2 rounded-lg">
              <a href={languageTexts[currentLanguage].resu} download>
                {languageTexts[currentLanguage].download}
              </a>
            </button>

            <SelectLanguage
              languageTexts={languageTexts}
              currentLanguage={currentLanguage}
              onChangeLanguage={handleChangeLanguage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
