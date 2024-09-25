import React from "react";
import { Linkedin, Github, Instagram, Mail,Phone } from "lucide-react";
import '../assets/css/style.css'

const Contact = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center pfbg fixed">
        <h2 className="text-3xl font-bold mb-6 text-center navtext">Get in Touch</h2>
        <div className="w-[90%] max-w-4xl h-1/2 flex flex-col md:flex-row gap-10 justify-around items-center">
          <div className="flex flex-col items-center">
            <a href="tel:+919384354367" class="phone-link">
              <Phone
                size={50}
                className="text-green-600 hover:text-green-400 transition duration-300"
              />
            </a>
            <p className="mt-2 text-lg font-semibold">Phone</p>
          </div>
          <div className="flex flex-col items-center">
          <a href="https://www.linkedin.com/in/jeyakumar-s-092997274" target="_blank">
            <Linkedin
              size={50}
              className="text-blue-700 hover:text-blue-500 transition duration-300"
            /> </a>
            <p className="mt-2 text-lg font-semibold">LinkedIn</p>
          </div>
          <div className="flex flex-col items-center">
          <a href="https://www.instagram.com/j_.e_.y_.46?igsh=MW9iaHBiY2kyMjR1MA==" target="_blank">
            <Instagram
              size={50}
              className="text-pink-600 hover:text-pink-400 transition duration-300"
            /></a>
            <p className="mt-2 text-lg font-semibold">Instagram</p>
          </div>
          <div className="flex flex-col items-center">
          <a href="https://github.com/Jeyakumar-05" target="_blank">
            <Github
              size={50}
              className="text-gray-800 hover:text-gray-600 transition duration-300"
            /></a>
            <p className="mt-2 text-lg font-semibold">GitHub</p>
          </div>
          <div className="flex flex-col items-center">
          <a href="mailto:jeyakumar1442@gmail.com" class="email-link ">
            <Mail
              size={50}
              className="text-yellow-600 hover:text-yellow-400 transition duration-300"
            /></a>
            <p className="mt-2 text-lg font-semibold">Email</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
