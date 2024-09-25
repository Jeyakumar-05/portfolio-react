import React from "react";
import Photo from "../assets/img/IMG_88281.jpg";
import "../assets/css/style.css";
import Project from "./Project";
import Contact from "./Contact";

const Profile = () => {
  return (
    <>
      <div className="h-screen pfbg flex flex-col lg:flex-row items-center fixed">
        <div className="lg:h-[80%] h-[60%] lg:w-[60%] w-full flex flex-col items-center justify-center px-4 lg:px-0">
          <div className="h-1/5 w-full lg:w-4/6 flex justify-center items-center">
            <h1 className="font-medium text-3xl lg:text-5xl navtext text-center">
              <span className="pinktext">Heyy!&nbsp;</span> I'm Jeyakumar S
            </h1>
          </div>
          <div className="w-full lg:w-[83%] h-[40%] flex justify-center items-center text-center">
            <h1 className="font-thin navtext text-xl lg:text-4xl">
              Aspiring Software Engineer with strong problem-solving skills,
              seeking to apply my knowledge in software development and system
              optimization in a fast-paced, technology-driven environment.
            </h1>
          </div>
        </div>

        <div className="h-[40%] lg:h-screen w-full lg:w-[40%] flex justify-center items-center">
          <img
            src={Photo}
            alt="profile"
            className="rounded-full h-[50%] w-[50%] lg:h-[40%] lg:w-[50%]"
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
