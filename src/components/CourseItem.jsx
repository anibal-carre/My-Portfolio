const CourseItem = ({ year, title, duration, details, theme }) => {
  return (
    <ol
      className={`flex flex-col md:flex-row relative border-l ${
        theme == "dark" ? "border-zinc-900" : "border-stone-300"
      } `}
    >
      <li className="mb-10 ml-4 ">
        <div
          className={`absolute w-3 h-3 ${
            theme == "dark" ? "bg-zinc-950" : "bg-stone-200"
          }  rounded-full mt-1.5 -left-1.5 border-white`}
        />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span
            className={`inline-block px-2 py-1 font-semibold text-white ${
              theme == "dark" ? "bg-zinc-950" : "bg-[#001b5e]"
            }  rounded-md`}
          >
            {year}
          </span>
          <span
            className={`text-lg font-semibold ${
              theme == "dark" ? "text-zinc-300" : "text-[#001b5e]"
            } `}
          >
            {title}
          </span>
          <span
            className={`my-1 text-sm font-normal leading-none ${
              theme == "dark" ? "text-slate-200" : "text-stone-400"
            } `}
          >
            {duration}
          </span>
        </p>
        <p
          className={`my-2 text-base font-normal ${
            theme == "dark" ? "text-slate-300" : "text-stone-500"
          } `}
        >
          {details}
        </p>
      </li>
    </ol>
  );
};

export default CourseItem;
