/* eslint-disable react/jsx-no-target-blank */
import Project from "./Project";
import './WavingHand.css'
import TechStack from "./TechStack";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r overflow-hidden from-slate-900 to-slate-950 py-8 md:py-10 lg:py-12 text-2xl text-white font-mono ">
      <div className="w-[95vw] md:w-[90vw] lg:w-[85vw] mx-auto">
        <p className="mb-4 text-2xl md:text-3xl">
          Hi! I am{" "}
          <span className="font-thin mb-4 text-2xl md:text-3xl underline underline-offset-4 hover:underline-offset-8 duration-150">
            Ali Aais
          </span>
          <span className="animate-wave text-4xl"> 👋 </span>{" "}
        </p>
        <div className="text-xl md:text-3xl mt-5 mb-5">
          I am a Front End Developer that has passion to learn and build stuff.
          I also want to explore the world of IOT. Also I love Cats 😁🐈
        </div>
        <div>
          <h1 className="border-t pt-8 text-2xl md:text-3xl my-4 font-bold">
            Tools and Technologies
          </h1>
          <TechStack/>
        </div>
        <div className="font-thin mt-5 ">
          <h1 className=" border-t pt-8 text-2xl md:text-3xl my-10 font-bold">
            Projects I have Built
          </h1>

          <Project url="https://linkedin-clone-silk-nine.vercel.app/" name="Linkedin Clone"
             techstack={{
              frontend:"React JS",
              backend:"Firebase",
              database:"Firestore",
              other:"Redux for State Management"
            }} />

            <Project url="https://ecommerce-liard-beta.vercel.app/" name="Ecommerce Site"
             techstack={{
              frontend:"React JS",
              api:"fakeapi.platzi",
              other:"Redux Toolkit for State Management"
            }} />

            <Project url="https://github.com/aais1/blog" name="Blog App"
             techstack={{
              frontend:"React JS",
              backend:"Node and Express",
              database:"MongoDB" 
            }} />

            <Project url="https://recipe-app-aais.vercel.app/" name="Recipe App"
             techstack={{
            frontend:"React JS",
            api:"themealdb"
            }} />

            <Project url="https://aais1.github.io/Quiz-Game/" name="Quiz Game"
             techstack={{
              other:"HTMl CSS & JS"
            }} />
          
        </div>

        <h1 className="mt-14 mb-2 border-t pt-8">Find Me Here </h1>
        <div className="flex items-center gap-x-2 ">
          <a href="https://www.instagram.com/ali_.aais/" className="rounded-md hover:bg-white duration-100" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path d="M 12 3 C 7.0414839 3 3 7.0414839 3 12 L 3 38 C 3 42.958516 7.0414839 47 12 47 L 38 47 C 42.958516 47 47 42.958516 47 38 L 47 12 C 47 7.0414839 42.958516 3 38 3 L 12 3 z M 12 5 L 38 5 C 41.877484 5 45 8.1225161 45 12 L 45 38 C 45 41.877484 41.877484 45 38 45 L 12 45 C 8.1225161 45 5 41.877484 5 38 L 5 12 C 5 8.1225161 8.1225161 5 12 5 z M 38 7 C 36.904545 7 36 7.9045455 36 9 L 36 12 C 36 13.095455 36.904545 14 38 14 L 41 14 C 42.095455 14 43 13.095455 43 12 L 43 9 C 43 7.9045455 42.095455 7 41 7 L 38 7 z M 38 9 L 41 9 L 41 12 L 38 12 L 38 9 z M 25 12 C 21.331661 12 18.01623 13.540914 15.648438 16 L 8 16 A 1.0001 1.0001 0 0 0 7 17 L 7 37 C 7 40.301625 9.6983746 43 13 43 L 37 43 C 40.301625 43 43 40.301625 43 37 L 43 17 A 1.0001 1.0001 0 0 0 42 16 L 34.351562 16 C 31.98377 13.540914 28.668339 12 25 12 z M 25 14 C 31.073477 14 36 18.926523 36 25 C 36 31.073477 31.073477 36 25 36 C 18.926523 36 14 31.073477 14 25 C 14 18.926523 18.926523 14 25 14 z M 25 16 A 1.0001 1.0001 0 0 0 24.589844 16.083984 C 19.831681 16.311415 16 20.186041 16 25 C 16 29.959394 20.041635 34 25 34 C 29.958365 34 34 29.959394 34 25 C 34 20.187371 30.170385 16.313404 25.414062 16.083984 A 1.0001 1.0001 0 0 0 25 16 z M 9 18 L 14.068359 18 C 12.766308 20.024088 12 22.423973 12 25 C 12 32.158523 17.841477 38 25 38 C 32.158523 38 38 32.158523 38 25 C 38 22.423973 37.233692 20.024088 35.931641 18 L 41 18 L 41 37 C 41 39.220375 39.220375 41 37 41 L 13 41 C 10.779625 41 9 39.220375 9 37 L 9 18 z M 25 18 C 28.877635 18 32 21.121394 32 25 C 32 28.878606 28.877635 32 25 32 C 21.122365 32 18 28.878606 18 25 C 18 21.121394 21.122365 18 25 18 z"></path>
            </svg>
          </a>

          <a
            href="https://pk.linkedin.com/in/ali-aais-b55857266"
            target="_blank"
            className="rounded-md hover:bg-white duration-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="60"
              height="60"
              viewBox="0 0 32 32"
            >
              <path d="M 7.5 5 C 6.132813 5 5 6.132813 5 7.5 L 5 24.5 C 5 25.867188 6.132813 27 7.5 27 L 24.5 27 C 25.867188 27 27 25.867188 27 24.5 L 27 7.5 C 27 6.132813 25.867188 5 24.5 5 Z M 7.5 7 L 24.5 7 C 24.785156 7 25 7.214844 25 7.5 L 25 24.5 C 25 24.785156 24.785156 25 24.5 25 L 7.5 25 C 7.214844 25 7 24.785156 7 24.5 L 7 7.5 C 7 7.214844 7.214844 7 7.5 7 Z M 10.4375 8.71875 C 9.488281 8.71875 8.71875 9.488281 8.71875 10.4375 C 8.71875 11.386719 9.488281 12.15625 10.4375 12.15625 C 11.386719 12.15625 12.15625 11.386719 12.15625 10.4375 C 12.15625 9.488281 11.386719 8.71875 10.4375 8.71875 Z M 19.46875 13.28125 C 18.035156 13.28125 17.082031 14.066406 16.6875 14.8125 L 16.625 14.8125 L 16.625 13.5 L 13.8125 13.5 L 13.8125 23 L 16.75 23 L 16.75 18.3125 C 16.75 17.074219 16.996094 15.875 18.53125 15.875 C 20.042969 15.875 20.0625 17.273438 20.0625 18.375 L 20.0625 23 L 23 23 L 23 17.78125 C 23 15.226563 22.457031 13.28125 19.46875 13.28125 Z M 9 13.5 L 9 23 L 11.96875 23 L 11.96875 13.5 Z"></path>
            </svg>
          </a>

          <a href="https://github.com/aais1" target="_blank" className="rounded-md hover:bg-white duration-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="60"
              height="60"
              viewBox="0 0 64 64"
            >
              <path d="M 32 10 C 19.85 10 10 19.85 10 32 C 10 44.15 19.85 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 40.238706 44.458716 47.16934 36.904297 49.306641 C 36.811496 49.1154 36.747844 48.905917 36.753906 48.667969 C 36.784906 47.458969 36.753906 44.637563 36.753906 43.601562 C 36.753906 41.823563 35.628906 40.5625 35.628906 40.5625 C 35.628906 40.5625 44.453125 40.662094 44.453125 31.246094 C 44.453125 27.613094 42.554688 25.720703 42.554688 25.720703 C 42.554688 25.720703 43.551984 21.842266 42.208984 20.197266 C 40.703984 20.034266 38.008422 21.634812 36.857422 22.382812 C 36.857422 22.382813 35.034 21.634766 32 21.634766 C 28.966 21.634766 27.142578 22.382812 27.142578 22.382812 C 25.991578 21.634813 23.296016 20.035266 21.791016 20.197266 C 20.449016 21.842266 21.445312 25.720703 21.445312 25.720703 C 21.445312 25.720703 19.546875 27.611141 19.546875 31.244141 C 19.546875 40.660141 28.371094 40.5625 28.371094 40.5625 C 28.371094 40.5625 27.366329 41.706312 27.265625 43.345703 C 26.675939 43.553637 25.872132 43.798828 25.105469 43.798828 C 23.255469 43.798828 21.849984 42.001922 21.333984 41.169922 C 20.825984 40.348922 19.7845 39.660156 18.8125 39.660156 C 18.1725 39.660156 17.859375 39.981656 17.859375 40.347656 C 17.859375 40.713656 18.757609 40.968484 19.349609 41.646484 C 20.597609 43.076484 20.574484 46.292969 25.021484 46.292969 C 25.547281 46.292969 26.492043 46.171872 27.246094 46.068359 C 27.241926 47.077908 27.230199 48.046135 27.246094 48.666016 C 27.251958 48.904708 27.187126 49.114952 27.09375 49.306641 C 19.540258 47.168741 14 40.238046 14 32 C 14 22.059 22.059 14 32 14 z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
