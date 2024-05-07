import { useState } from "react";

const SelectLanguage = ({
  onChangeLanguage,
  languageTexts,
  currentLanguage,
  theme,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    onChangeLanguage(newLanguage);
  };

  return (
    <div
      className={`mt-2 md:mt-10 ${
        theme == "dark" ? "bg-zinc-950" : "bg-[#001b5e]"
      }  text-white font-semibold p-2 rounded-lg`}
    >
      <label htmlFor="language-select">
        {languageTexts[currentLanguage].lang.language}:
      </label>
      <select
        className={`${theme == "dark" ? "bg-zinc-950" : "bg-[#001b5e]"} `}
        id="language-select"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option
          className={`${theme == "dark" ? "bg-zinc-950" : "bg-[#001b5e]"} `}
          value="en"
        >
          {languageTexts[currentLanguage].lang.language1}
        </option>
        <option
          className={`${theme == "dark" ? "bg-zinc-950" : "bg-[#001b5e]"} `}
          value="es"
        >
          {languageTexts[currentLanguage].lang.language2}
        </option>
        <option
          className={`${theme == "dark" ? "bg-zinc-950" : "bg-[#001b5e]"} `}
          value="pt"
        >
          {languageTexts[currentLanguage].lang.language3}
        </option>
      </select>
    </div>
  );
};

export default SelectLanguage;
