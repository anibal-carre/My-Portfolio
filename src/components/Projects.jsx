import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project4 from "../assets/project4.png";
import tictac from "../assets/tictactoe.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
import project8 from "../assets/project8.png";
import project9 from "../assets/project9.png";
import project10 from "../assets/project10.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 2xl:max-w-[1500px]"
    >
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        From creating interactive websites using HTML, CSS, and JavaScript to
        building dynamic applications with React and Next.js, and crafting
        solutions with PHP, my work embodies a mix of creativity and technical
        prowess. Additionally, I've used Tailwind CSS to enhance the visual
        appeal and responsiveness of my projects.
      </p>
      <div className="grid sm:grid-cols-2 gap-12 2xl:grid-cols-3">
        <ProjectItem
          tech={"HTML, CSS and Javascript"}
          img={project1}
          title="Tip Amount"
          url={"https://funval-dev1-final-project-by-david.netlify.app/"}
        />
        <ProjectItem
          tech={"React.js"}
          img={tictac}
          title="Tic Tac Toe"
          url={"https://tic-tac-toe-9sqp.vercel.app/"}
        />
        <ProjectItem
          tech={"Next.js, Tailwind, Weather API"}
          img={project2}
          title="Weather App"
          url={"https://weather-app-with-next-js.vercel.app/"}
        />
        <ProjectItem
          tech={"Next.js and Tailwind"}
          img={project9}
          title="Spotify Interface"
          url={
            "https://spotify-interface-tailwind-152kofalc-anibal-carre.vercel.app/"
          }
        />
        <ProjectItem
          tech={"Next.js and Users API"}
          img={project4}
          title="Users App"
          url={"https://users-app-gold.vercel.app/"}
        />
        <ProjectItem
          tech={"React and Three.js"}
          img={project5}
          title="Iphone Page"
          url={"https://apple-iphone-3d-website-by-david.netlify.app/"}
        />
        <ProjectItem
          tech={"MERN App"}
          img={project6}
          title="Fakebook"
          url={"https://github.com/anibal-carre/my-fakebook-MERN-app"}
        />
        <ProjectItem
          tech={"PHP and Mysql"}
          img={project7}
          title="Authentication App"
          url={
            "https://github.com/anibal-carre/miniproject-dev3-php-and-mysql-app"
          }
        />
        <ProjectItem
          tech={"PHP and Mysql"}
          img={project8}
          title="University CRUD"
          url={"https://github.com/anibal-carre/university-final-project-3"}
        />
        <ProjectItem
          tech={"React Native"}
          img={project10}
          title="Pomodoro App"
          url={"https://github.com/anibal-carre/pomodoro-react-native"}
        />
      </div>
    </div>
  );
};

export default Projects;
