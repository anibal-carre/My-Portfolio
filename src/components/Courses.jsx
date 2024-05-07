import CourseItem from "./CourseItem";

const Courses = ({ languageTexts, currentLanguage, theme }) => {
  const data = [
    {
      year: 2023,
      title: languageTexts[currentLanguage].courses.title1,
      duration: languageTexts[currentLanguage].courses.time1,
      details: languageTexts[currentLanguage].courses.content1,
    },
    {
      year: 2022,
      title: languageTexts[currentLanguage].courses.title2,
      duration: languageTexts[currentLanguage].courses.time2,
      details: languageTexts[currentLanguage].courses.content2,
    },
    {
      year: 2020,
      title: languageTexts[currentLanguage].courses.title3,
      duration: languageTexts[currentLanguage].courses.time3,
      details: languageTexts[currentLanguage].courses.content3,
    },
  ];
  return (
    <div
      id="work"
      className={` ${
        theme == "dark" ? "bg-zinc-800 text-white" : ""
      } max-w-[1040px m-auto md:pl-20 p-4 py-16`}
    >
      <h1
        className={`text-4xl font-bold text-center ${
          theme == "dark" ? "text-zinc-200" : ""
        } text-[#001b5e] mb-5 md:mb-10`}
      >
        {languageTexts[currentLanguage].courses.courses}
      </h1>
      {data.map((item, id) => (
        <CourseItem
          key={id}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
          theme={theme}
        />
      ))}
    </div>
  );
};

export default Courses;
