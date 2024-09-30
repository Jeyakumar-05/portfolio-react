import React from "react";
import Photo from "../assets/img/IMG_88281.jpg";
import "../assets/css/style.css";

const Profile = () => {
  return (
    <div className="h-screen pfbg flex flex-col lg:flex-row items-center px-4 lg:px-0">
      <div className="lg:h-[80%] h-[60%] lg:w-[60%] w-full flex flex-col items-center justify-center">
        <div className="h-1/5 w-full lg:w-4/6 flex justify-center items-center mb-4">
          <h1 className="font-medium text-2xl lg:text-5xl navtext text-center">
            <span className="pinktext">Heyy!&nbsp;</span> I'm Jeyakumar S
          </h1>
        </div>
        <div className="w-full lg:w-[83%] h-auto flex justify-center items-center text-center px-2">
          <h1 className="font-thin navtext text-lg lg:text-3xl leading-relaxed">
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
          className="rounded-full h-48 w-48 lg:h-[40%] lg:w-[40%] object-cover"
        />
      </div>
    </div>
  );
};

export default Profile;
