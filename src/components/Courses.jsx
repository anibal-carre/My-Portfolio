import CourseItem from "./CourseItem";

const data = [
  {
    year: 2023,
    title: "Fullstack Developer | Funval International",
    duration: "+4 months",
    details:
      "The Funval Fullstack course is an intensive 4-month program covering both front-end and back-end development. You'll learn HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, PHP, MySQL, and Laravel, gaining skills to create dynamic web experiences and build robust, scalable applications.",
  },
  {
    year: 2022,
    title: "Systems analysis and development | Cruzeiro do Sul - Brazil",
    duration: "+8 months",
    details:
      "This is a technical course, I am currently in the second semester of the course, I started in December 2022 and I plan to graduate in December 2024",
  },
  {
    year: 2020,
    title: "Seller course | Senac Brazil",
    duration: "3 months",
    details:
      "The SENAC Brazil Sales Course offers a comprehensive learning experience in effective sales strategies, customer relations, negotiation techniques, and product knowledge.",
  },
];

const Courses = () => {
  return (
    <div id="work" className="max-w-[1040px m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-5 md:mb-10">
        Courses
      </h1>
      {data.map((item, id) => (
        <CourseItem
          key={id}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Courses;
