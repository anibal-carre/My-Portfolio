import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
const Tech = () => {
  return (
    <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 2xl:max-w-[1500px]">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Technologies
      </h1>

      <div className="flex justify-center">
        <div className="flex flex-wrap justify-between pt-6 max-w-[400px] w-full mt-5">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            width={30}
            height={30}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            width={30}
            height={30}
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            width={30}
            height={30}
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            width={30}
            height={30}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"
            width={30}
            height={30}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            width={30}
            height={30}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            width={30}
            height={30}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
            width={35}
            height={35}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg"
            width={35}
            height={35}
          />
        </div>
      </div>
    </div>
  );
};

export default Tech;
